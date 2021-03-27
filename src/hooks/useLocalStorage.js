import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialState) => {

  let state = initialState;

  if (localStorage.getItem(key)) {
    state = JSON.parse(localStorage.getItem(key));
  }

  const [value, setValue] = useState(state);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];

};

export default useLocalStorage;
