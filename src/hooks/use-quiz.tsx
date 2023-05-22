import React from 'react';
import { RadioChangeEvent } from 'antd';

export const useQuiz = () => {
  const [value, setValue] = React.useState(null);

  const onChange = (event: RadioChangeEvent) => {
    setValue(event.target.value);
  };

  const handleQuestionQuize = () => {
    console.log(value);
  };
  return { value, onChange, handleQuestionQuize };
};
