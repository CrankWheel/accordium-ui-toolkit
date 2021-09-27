import React from 'react';

export const RadioContext = React.createContext({
  selectedValue: null,
  name: '',
  handleChange: () => {},
});

export default RadioContext;
