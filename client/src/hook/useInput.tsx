import { useState, useCallback } from 'react';

const useInput = (initialState: any) => {
  const [state, setState] = useState(initialState);

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  const clearHandler = useCallback(() => {
    setState(initialState);
  }, [initialState]);

  return [state, onChangeHandler, clearHandler, setState];
};

export default useInput;
