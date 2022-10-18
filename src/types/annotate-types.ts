export type Span = {
  start: number;
  end: number;
  text?: string;
  color?: string;
  tag?: string;
};

export interface AnnotateTag extends Span {
  className?: string;
}

export interface MarkedSpan extends AnnotateTag {
  mark?: boolean;
  index?: number;
  content: string;
}

export interface AnnotateBlendTag extends Span {}
