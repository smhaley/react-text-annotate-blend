# react-text-annotate-blend
### React component for blended text marking

A component allowing for blended text annotations.  

This project extends the `Text Annotator` component from <a href='https://mcamac.github.io/react-text-annotate/>'>`react-text-annotate`</a>.


```
const value = [
  {
    "start": 0,
    "end": 11,
    "text": "Let's Blend",
    "tag": "tagA",
    "color": "rgb(240,100,3)"
  },
  {
    "start": 6,
    "end": 23,
    "text": "Blend Annotations",
    "tag": "tagB",
    "color": "#563C5C"
  }
]

<TextAnnotateBlend
    content="Let's Blend Annotations!"
    onChange={()=>{}}
    value={value}
/>

<mark style="background-color: rgb(240, 100, 3); padding: 0px 4px;" data-start="0" data-end="6">Let's </mark><mark style="background-color: rgb(86, 60, 92); padding: 0px 4px; color: white;" data-start="11" data-end="24"> Annotations!</mark><mark style="background-color: rgb(180, 82, 65); padding: 0px 4px; color: white;" data-start="6" data-end="11">Blend</mark>