import useEffectOnce from './useEffectOnce';

export default function useMount(fn) {
  useEffectOnce(() => {
    if (fn) fn();
  });
}
