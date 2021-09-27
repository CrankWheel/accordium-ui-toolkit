import React from 'react';
import { RadioContext } from './RadioContext';

export default class RadioGroup extends React.PureComponent {
  render() {
    const { selectedValue, name, handleChange } = this.props;
    return <RadioContext.Provider value={{ selectedValue, name, handleChange }}>{this.props.children}</RadioContext.Provider>;
  }
}
