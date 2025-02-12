import { useEffect, useRef } from "react";

export const useMeasure = (shouldMeasure, onMeasure) => {
  const displayCountRef = useRef(0);

  useEffect(() => {
    if (!shouldMeasure) return;

    displayCountRef.current += 1;
  });

  useEffect(() => {
    if (!shouldMeasure) return;

    let id = setInterval(() => {
      onMeasure(displayCountRef.current);
      displayCountRef.current = 0;
    }, 1000);

    return () => clearInterval(id);
  }, [shouldMeasure, onMeasure]);
};
