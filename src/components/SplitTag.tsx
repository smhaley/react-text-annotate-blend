import React from "react";
import Mark from "./Mark";

export interface SplitProps {
  key: string;
  content: string;
  start: number;
  end: number;
  tag?: string;
  color?: string;
  onClick: (arg0: any) => any;
}

const SplitTag:React.FC<SplitProps> = (props: any) => {

    if (props.mark) return <Mark {...props} />;
  
    return (
      <span
        data-start={props.start}
        data-end={props.end}
        onClick={() => props.onClick({ start: props.start, end: props.end })}
      >
        {props.content}
      </span>
    );
  };

  export default SplitTag;