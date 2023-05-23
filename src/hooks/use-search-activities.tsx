import React from 'react';

export const useSearchActivities = () => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSearch = (value: string) => {
    console.log(value);
  };

  return {
    inputValue,
    handlerOnChange,
    onSearch,
  };
};
