# react-text-annotate-blend

### React component for interactive text annotations with overlap blending

This project extends and cleans up the `TextAnnotator` component from <a href='https://mcamac.github.io/react-text-annotate/'>`react-text-annotate`</a>.

<a href='https://smhaley.github.io/react-text-annotate-blend/'> <b>Check the docs!</b></a>

<a href='https://github.com/smhaley/react-text-annotate-blend/tree/main/examples'>Starter code</a>

### Minimum example:

```js
const value = [
  {
    "start": 5,
    "end": 29,
    "text": "component lets you blend",
    "tag": "tagA",
    "color": "rgb(179, 245, 66)"
  },
  {
    "start": 24,
    "end": 41,
    "text": "blend annotations",
    "tag": "tagB",
    "color": "#42f5f5"
  }
]

<TextAnnotateBlend
    content="This component lets you blend annotations!"
    onChange={()=>{}}
    value={value}
/>
```
