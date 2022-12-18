import { RefObject, useLayoutEffect, useState } from "react";


export const useIsOverflow = <T extends HTMLElement>(ref: RefObject<T>, callback?: CallableFunction) => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current!.scrollHeight > current!.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};
