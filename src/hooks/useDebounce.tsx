import { useEffect, useState } from "react";

const useDebounce = (
  value: string,
  delay: number
): { debouncedValue: string; isDebouncing: boolean } => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isDebouncing, setDebouncing] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setDebouncing(false);
    }, delay);
    return () => {
      setDebouncing(true);
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue, isDebouncing };
};

export default useDebounce;
