import React from "react";
import Mark from "./Mark";
import { MarkedSpan } from "../types/annotate-types";

export interface SplitProps<T> {
  key: string;
  content: string;
  start: number;
  end: number;
  tag?: string;
  color?: string;
  onClick: (span: T) => void;
  className?: string;
  mark?: boolean;
  index?: number;
}

const SplitTag = <T extends MarkedSpan>(props: SplitProps<T>) => {
  if (props.mark) return <Mark {...props} />;

  return (
    <span
      data-start={props.start}
      data-end={props.end}
      onClick={() => props.onClick({ start: props.start, end: props.end } as T)}
    >
      {props.content}
    </span>
  );
};

export default SplitTag;
