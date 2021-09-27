import classNames from 'classnames';

export { mergeProps, find } from './helpers';
export { default as DomHelpers } from './dom_helpers';
export const cx = classNames;
export const cssModules = (styles = {}) => className => (styles[className] ? styles[className] : className);
export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
export const camelCase = str =>
  str.replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );
export const isValuePresent = value =>
  value !== null && value !== undefined && value !== '' && !(typeof value === 'number' && Number.isNaN(value));

export const getInitials = string => {
  const sanitizedString = string.replace(/ +(?= )/g, '');
  const names = sanitizedString.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

export const getViewport = () => ({
  height: window.innerHeight || document.documentElement.offsetHeight,
  width: window.innerWidth || document.documentElement.offsetWidth,
});
