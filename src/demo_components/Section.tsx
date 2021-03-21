import React, { RefObject, useRef, useEffect, MutableRefObject } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

// interface Props {
//     ref:React.MutableRefObject<HTMLDivElement | null>;
// }

type Props = {
  children: React.ReactNode;
  index: number;
  activeHandler: (index: number) => void;
};

const Section = React.forwardRef<HTMLDivElement, Props>((props, ref) => {

  const node = ref as MutableRefObject<HTMLDivElement>;

  const entry = useIntersectionObserver(node, {    
    
    threshold: 0,
    // root = null,
    rootMargin: "-50% 0px -50% 0px",
    freezeOnceVisible: false});

  useEffect(() => {
    const isVisible = !!entry?.isIntersecting;
    if (isVisible) {
      props.activeHandler(props.index);
    }
  }, [entry]);

  return <div ref={node}>{props.children}</div>;
});

export default Section;
