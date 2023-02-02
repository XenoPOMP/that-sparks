import { Random } from 'random-js';
import { useCallback, useEffect, useRef } from 'react';

const random = new Random();

const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number,
) => {
  const timeoutId = useRef(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleTick = () => {
      const nextTickAt = random.integer(minDelay, maxDelay);

      // @ts-ignore
      timeoutId.current = window.setTimeout(() => {
        savedCallback.current();
        handleTick();
      }, nextTickAt);
    };

    handleTick();

    // @ts-ignore
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  const cancel = useCallback(() => {
    // @ts-ignore
    window.setTimeout(timeoutId.current);
  }, []);

  return cancel;
};

export default useRandomInterval;
