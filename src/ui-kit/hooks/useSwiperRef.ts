import { Ref, useEffect, useRef, useState } from 'react';


export const useSwiperRef = <T extends HTMLElement>(): [
    T | undefined,
  Ref<T>
] => {
  const [wrapper, setWrapper] = useState<T>();
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      setWrapper(ref.current);
    }
  }, []);

  return [wrapper, ref];
};
