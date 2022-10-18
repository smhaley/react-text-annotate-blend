import sortBy from "lodash.sortby";
import { MarkedSpan, Span } from "../../types/annotate-types";

export const range = (start: number, end: number, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

export const hexToRGB = (col: string) => {
  let r = "0",
    g = "0",
    b = "0";

  if (col.length === 4) {
    r = "0x" + col[1] + col[1];
    g = "0x" + col[2] + col[2];
    b = "0x" + col[3] + col[3];
  } else if (col.length === 7) {
    r = "0x" + col[1] + col[2];
    g = "0x" + col[3] + col[4];
    b = "0x" + col[5] + col[6];
  }

  return { r: +r, g: +g, b: +b, a: 0.75 };
};

export const rgbParse = (col: string) => {
  let sep = col.indexOf(",") > -1 ? "," : " ";
  let rgb = col.substr(4).split(")")[0].split(sep);

  return { r: +rgb[0], g: +rgb[1], b: +rgb[2], a: 0.75 };
};

interface blendObj {
  [index: string]: number;
  r: number;
  g: number;
  b: number;
  a: number;
}

const rgbMean = (a: blendObj, b: blendObj) => {
  const cols: string[] = ["r", "g", "b"];
  const meanCol = cols.map((col) => Math.sqrt((a[col] ** 2 + b[col] ** 2) / 2));
  let opacity: number;

  if (a.r === meanCol[0] && a.g === meanCol[1] && a.b === meanCol[2]) {
    opacity = (a.a + b.a) / 2;
  } else {
    opacity = 1;
  }
  return { r: meanCol[0], g: meanCol[1], b: meanCol[2], a: opacity };
};

const colParser = (col: string) => {
  if (col.charAt(0) === "#") {
    return hexToRGB(col);
  } else if (col.toLowerCase().substr(0, 3) === "rgb") {
    return rgbParse(col);
  } else {
    return;
  }
};

export const luminTest = (col: string) => {
  const { r, g, b } = colParser(col)!;

  const luma = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

  if (luma > 0.5) {
    return false;
  } else {
    return true;
  }
};

export const blend = (colA: string, colB: string) => {
  let a: blendObj;
  let b: blendObj;

  a = colParser(colA)!;
  b = colParser(colB)!;

  let blend = rgbMean(a, b);
  return (
    "rgb(" + +blend.r + "," + +blend.g + "," + +blend.b + "," + +blend.a + ")"
  );
};

export const splitWithOffsets = <T extends Span>(
  text: string,
  offsets: T[],
  strict?: boolean
): MarkedSpan[] => {
  let lastEnd = 0;
  const splits = [];

  for (let offset of sortBy(offsets, (o) => o.start)) {
    const { start, end } = offset;
    if (lastEnd < start) {
      splits.push({
        start: lastEnd,
        end: start,
        content: text.slice(lastEnd, start),
      });
    }
    if (strict && lastEnd > start) {
      console.error(
        "Overlapping tags are not valid with TextAnnotate and will lead to unexpected outcomes. Please check input data. Did you intend to use TextAnnotateBlend?"
      );
    }
    splits.push({
      ...offset,
      mark: true,
      content: text.slice(start, end),
    });
    lastEnd = end;
  }
  if (lastEnd < text.length) {
    splits.push({
      start: lastEnd,
      end: text.length,
      content: text.slice(lastEnd, text.length),
    });
  }
  return splits;
};

export const strictSplitWithOffsets = (
  text: string,
  offsets: { start: number; end: number }[]
) => {
  let lastEnd = 0;
  const splits = [];
  for (let offset of sortBy(offsets, (o) => o.start)) {
    const { start, end } = offset;
    if (lastEnd < start) {
      splits.push({
        start: lastEnd,
        end: start,
        content: text.slice(lastEnd, start),
      });
    }
    splits.push({
      ...offset,
      mark: true,
      content: text.slice(start, end),
    });
    lastEnd = end;
  }
  if (lastEnd < text.length) {
    splits.push({
      start: lastEnd,
      end: text.length,
      content: text.slice(lastEnd, text.length),
    });
  }
  return splits;
};

export const selectionIsEmpty = (selection: Selection) => {
  let position = selection.anchorNode!.compareDocumentPosition(
    selection.focusNode!
  );

  return position === 0 && selection.focusOffset === selection.anchorOffset;
};

export const selectionIsBackwards = (selection: Selection) => {
  if (selectionIsEmpty(selection)) return false;

  let position = selection.anchorNode!.compareDocumentPosition(
    selection.focusNode!
  );
  let backward = false;
  if (
    (!position && selection.anchorOffset > selection.focusOffset) ||
    position === Node.DOCUMENT_POSITION_PRECEDING
  )
    backward = true;

  return backward;
};

export const tagTransformer = <T extends Span>(
  value: T[],
  onChange: (value: T[]) => void,
  overlapLimit: number
) => {
  if (value.length) {
    const overlap = getOverlap(value);
    if (overlap <= overlapLimit) {
      onChange(value);
    }
  } else {
    onChange(value);
  }
};

export const getOverlap = <T extends Span>(value: T[]) => {
  const tags = [...value];
  const newTag = tags.pop();
  let overlap = 0;

  if (!newTag) return overlap;

  const newTagRange = range(newTag.start, newTag.end);

  tags.forEach((val) => {
    const tagRange = range(val.start, val.end);

    let tagOverlap = tagRange
      .map((i: number) => {
        return newTagRange.indexOf(i) >= 0;
      })
      .filter(Boolean).length;

    if (tagOverlap >= 2) {
      overlap += 1;
    }
  });
  return overlap;
};
