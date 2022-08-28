import { RefObject, useEffect, useRef } from 'react';

/**
 * This hook is used like a React.useRef hook but will call the handler you pass as parameter when you click outside the element associated to the ref.
 *
 * @static
 * @creator maksym.tytechko
 * @since 1.0.0
 * @category hooks
 *
 * @example
   const MyComponent = () => {
      const [showEl, setShowEl] = React.useState(true);
      const myElRef = useClickOutside(setShowEl(el => !el));

      return <div ref={myElRef}>My element</div>;
  };
 *
 * @param handler { (event: MouseEvent | TouchEvent) => void }
 */

function useClickOutside<RefType extends HTMLElement>(handler: (event?: MouseEvent | TouchEvent) => void): RefObject<RefType> {
  const ref = useRef<RefType>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as RefType)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);

  return ref;
}

export default useClickOutside;
