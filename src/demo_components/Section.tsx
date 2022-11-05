import React, { useEffect, MutableRefObject } from "react";
import { useIntersectionObserver } from "./hooks";

type Props = {
  children: React.ReactNode;
  // index: number;
  sectionName: string;
  activeHandler: (sectionName: string) => void;
};

const Section = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { activeHandler, sectionName, children } = props;

  const node = ref as MutableRefObject<HTMLDivElement>;

  const entry = useIntersectionObserver(node, {
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
    freezeOnceVisible: false,
  });

  useEffect(() => {
    const isVisible = !!entry?.isIntersecting;
    if (isVisible) {
      console.log(sectionName)
      activeHandler(sectionName);
    }
  }, [entry, sectionName, activeHandler]);

  return <div ref={node} style = {{background: 'pink'}}>{children}</div>;
});

export default Section;
