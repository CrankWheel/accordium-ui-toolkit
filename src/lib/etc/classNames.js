/*!
  This code is ported from classnames package made by Jed Watson.

  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*
  USAGE: (please import before using it :P)
  # inline
      <GoodComponent classNames={classNames('dropdown', { collapse : true, 'good-people': false })} />
      // above code will produce "drowdown collapse"
  # non-inline
      const buttonStyle = classNames('good-effort', {
        sparkling : this.state.goodPeople === typeOfPeople.smartPeople, // true
        'blink-water': this.props.politePeoples.length > 2, // false
      })
      <button classNames={buttonStyle} />
      // above code will produde "good-effort sparkling"
 */
export default function classNames(...args) {
  const classes = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    // eslint-disable-next-line no-continue
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner = classNames(...arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg) {
        if ({}.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}
