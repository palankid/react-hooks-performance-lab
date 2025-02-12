import { useState, useMemo } from "react";


/**
 * Performance Optimization Demo: useMemo
 * 
 * This component demonstrates when useMemo is (and isn't) beneficial:
 * 
 * Test Cases:
 * 1. Small Arrays (< 10,000 elements)
 *    - Memoization overhead often exceeds performance benefits
 *    - useMemo adds unnecessary complexity
 * 
 * 2. Large Arrays (> 1,000,000 elements)
 *    - Performance difference becomes noticeable
 *    - Still may not justify optimization in most real-world scenarios
 * 
 * 3. Force Rerender Test
 *    - Shows how non-memoized values recalculate on every render
 *    - Demonstrates memoization's dependency array behavior
 * 
 * Common useMemo Anti-patterns:
 * - Memoizing simple calculations
 * - Memoizing object literals without measuring
 * - Using it as a "just in case" optimization
 * 
 * Legitimate useMemo Use Cases:
 * 1. Computationally expensive calculations
 * 2. When you've measured and confirmed a performance bottleneck
 * 
 * Key Takeaways:
 * - React's default behavior is already optimized
 * - Premature optimization adds complexity
 * - Always measure performance before optimizing
 * - Consider the overhead of memoization itself
 */

const expensiveCalculation = (length) => {
  const start = performance.now();

  const result = Array.from({ length }, (_, i) => i)
    .reduce((acc) => acc + Math.random(), 0);

  const end = performance.now();
  return { result: result + Math.random(), time: end - start };
};

const UseMemoTest = () => {
  const [counter, setCounter] = useState(0);
  const [inputLength, setInputLength] = useState(1000000);

  const value = expensiveCalculation(inputLength);
  const memoizedValue = useMemo(
    () => expensiveCalculation(inputLength),
    [inputLength]
  );

  return (
    <div className="min-h-full w-full p-8">
      <div className="mb-4">
        <span>Array Length: </span>
        <input
          type="number"
          value={inputLength}
          onChange={(e) => setInputLength(Number(e.target.value))}
          className="border p-1"
        />
      </div>

      <p>Without useMemo: {value.result.toFixed(2)} (took {value.time.toFixed(1)} ms)</p>
      <p>With useMemo: {memoizedValue.result.toFixed(2)} (took {memoizedValue.time.toFixed(1)} ms)</p>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors w-fit mt-4"
        onClick={() => setCounter(c => c + 1)}>
        Force Rerender ({counter})
      </button>
    </div>
  );
};

export default UseMemoTest;