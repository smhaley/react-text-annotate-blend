import React from "react";
import { luminTest } from "./utils/utils";
import { MarkedSpan } from "../types/annotate-types";

export interface MarkProps<T> {
  key: string;
  content: string;
  start: number;
  end: number;
  onClick: (arg: T) => void;
  tag?: string;
  color?: string;
  className?: string;
  index?: number;
}

const Mark = <T extends MarkedSpan>({
  color,
  className,
  end,
  start,
  onClick,
  content,
  tag,
}: MarkProps<T>) => {
  const lumin = color ? luminTest(color) : false;
  return (
    <mark
      className={className}
      style={{
        backgroundColor: color || "#84d2ff",
        padding: "0 4px",
        ...(lumin && { color: "white" }),
      }}
      data-start={start}
      data-end={end}
      onMouseUp={() => onClick({ start: start, end: end } as T)}
    >
      {content}
      {tag && (
        <span style={{ fontSize: "0.7em", fontWeight: 500, marginLeft: 6 }}>
          {tag}
        </span>
      )}
    </mark>
  );
};

export default Mark;
