# react-text-annotate-blend
### React component for blended text annotations

A simple component to add more complexity to tagging tools.


This project extends the `Text Annotator` component from <a href='https://mcamac.github.io/react-text-annotate/>'>`react-text-annotate`</a>.


#### Check the docs!


### Minimum example:

```
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

<span data-start="0" data-end="5">This </span><mark style="background-color: rgb(179, 245, 66); padding: 0px 4px;" data-start="5" data-end="24">component lets you </mark><mark style="background-color: rgb(135, 245, 179); padding: 0px 4px;" data-start="24" data-end="29">blend</mark><mark style="background-color: rgb(66, 245, 245); padding: 0px 4px;" data-start="29" data-end="41"> annotations</mark><span data-start="41" data-end="42">!</span>