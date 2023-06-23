import { useEffect } from 'react';

export type KeyPressCallback = (key: string) => void;

function useKeyPress(callback: KeyPressCallback): void {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
        callback(event.key);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [callback]);
}

export default useKeyPress;
