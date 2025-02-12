import { useEffect, useState } from "react";

export const useDisplayValue = (value) => {
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    let id = setInterval(() => {
      setMultiplier(Math.round(Math.random() * 10));
    }, 0);

    return () => clearInterval(id);
  }, []);

  return value * multiplier;
};
