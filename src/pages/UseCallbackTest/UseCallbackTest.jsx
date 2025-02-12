import { useState } from "react";
import { Optimized, Unoptimized } from "./components";

/**
 * Performance Optimization Demo: useCallback
 * 
 * This component demonstrates that useCallback doesn't always provide
 * performance benefits, even in extreme cases. The test renders 100
 * child components by default with two variants - one using useCallback and one without.
 * 
 * Test Conditions:
 * - 100 child components rendered simultaneously
 * - Rapid state updates (10ms intervals)
 * - Memoized components using React.memo
 * - Identical functionality in both variants
 * 
 * Key takeaways:
 * 1. CPU utilization remains similar in both variants, showing minimal performance difference
 * 2. Added complexity of useCallback (extra code, mental overhead) may not justify its use
 * 3. React's default rendering behavior is typically efficient enough
 * 4. Performance optimizations should be based on measured bottlenecks
 * 
 * Use Case:
 * This component serves as an educational example to demonstrate when NOT to
 * prematurely optimize with useCallback. It shows that React's built-in
 * reconciliation is often sufficient for most applications.
 */

const UseCallbackTest = () => {
  const [optimized, setOptimized] = useState(false);
  const [count, setCount] = useState(100);
  const [displayCount, setDisplayCount] = useState(0);

  const handleMeasure = (count) => {
    setDisplayCount(count);
  };

  const Component = optimized ? Optimized : Unoptimized;

  return (
    <div className="min-h-full w-full p-8">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors w-fit"
            onClick={() => setOptimized(!optimized)}
          >
            {optimized ? 'Optimized' : 'Unoptimized'}
          </button>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
            className="px-4 py-2 border rounded-md w-32"
            min="1"
            placeholder="Component count"
          />
          <span>FPS: {displayCount}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: count }).map((_, i) => {
            return <Component key={i} val={i + 1} shouldMeasure={i === 0} onMeasure={handleMeasure} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UseCallbackTest;