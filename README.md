# react-text-annotate-blend

### React component library for interactive text annotations with support for overlapping annotations that blend

## [Check the docs!](https://smhaley.github.io/react-text-annotate-blend)

[starter code](https://github.com/smhaley/react-text-annotate-blend/tree/main/examples)

### TextAnnotateBlend

This component allows for text annotation with overlapping start and end positions. The overlap is resolved as a _blend_ of the two tag colors to visually indicate the overlap.

TextAnnotateBlend only supports a single overlap of annotations at a given position. 

## Minimum Blended Annotation example:

```js
const value = [
  {
    start: 5,
    end: 29,
    tag: "tagA",
    color: "rgb(179, 245, 66)"
  },
  {
    start: 24,
    end: 41,
    tag: "tagB",
    color: "#42f5f5"
  }
]

<TextAnnotateBlend
    content="This component lets you blend annotations!"
    value={value}
/>
```

### TextAnnotate

TextAnnotate is a simple text annotation component bound to start and end positioning. Overlapping components is not supported.

This component extends and cleans up the `TextAnnotator` component from [react-text-annotate](https://mcamac.github.io/react-text-annotate).

## Minimum Annotation example:

```js
const value = [
  {
    start: 0,
    end: 14,
    tag: "tagA",
    color: "rgb(179, 245, 66)",
  },
  {
    start: 24,
    end: 41,
    tag: "tagB",
    color: "#42f5f5",
  },
]

<TextAnnotate
    content="This component lets you blend annotations!"
    value={value}
/>
```
