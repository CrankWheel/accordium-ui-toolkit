import styles from './GridSystem.module.scss';

export default function getClass(className) {
  return styles && styles[className] ? styles[className] : className;
}
