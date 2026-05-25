import { useState, useEffect } from 'react';

/**
 * A hook that syncs React state with localStorage, supporting Next.js SSR.
 * Scoped inside isolated app/createQr.
 * 
 * @param {string} key - The localStorage key.
 * @param {any} initialValue - Default value if key is empty.
 * @returns {[any, Function]} - Value and state setter.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const defaultValue = typeof initialValue === 'function' ? initialValue() : initialValue;
    try {
      if (typeof window === 'undefined') return defaultValue;
      const item = window.localStorage.getItem(key);
      if (item === null || item === 'undefined') {
        return defaultValue;
      }
      return JSON.parse(item);
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
