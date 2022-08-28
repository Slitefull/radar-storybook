import { useCallback, useRef, useState } from 'react'


/**
 * Handles the event of hovering over the wrapped component.
 *
 * Use the useState() hook to create a variable that holds the hovering state.
 * Use the useCallback() hook to memoize two handler functions that update the state.
 * Use the useCallback() hook to create a callback ref and create or update the listeners for the 'mouseover' and 'mouseout' events.
 * Use the useRef() hook to keep track of the last node passed to callbackRef to be able to remove its listeners.
 *
 * @static
 * @creator maksym.tytechko
 * @since 1.0.0
 * @category hooks
 *
 * @example
 const MyApp = () => {
  const [hoverRef, isHovered] = useHover();

  return <div ref={hoverRef}>{isHovered ? 'Hovering' : 'Not hovering'}</div>;
 };
 *
 **/

const useHover = <T extends HTMLElement>(): [((node: T) => void), boolean] => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseOver = useCallback(() => setIsHovered(true), []);
  const handleMouseOut = useCallback(() => setIsHovered(false), []);

  const nodeRef = useRef<T | null>(null);

  const callbackRef = useCallback(
    (node: T) => {
      if (nodeRef.current) {
        nodeRef.current.removeEventListener('mouseover', handleMouseOver);
        nodeRef.current.removeEventListener('mouseout', handleMouseOut);
      }

      nodeRef.current = node;

      if (nodeRef.current) {
        nodeRef.current.addEventListener('mouseover', handleMouseOver);
        nodeRef.current.addEventListener('mouseout', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, isHovered];
};

export default useHover;
