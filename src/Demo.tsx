import React, { useState } from "react";
import TextAnnotateBlend from "./components/TextAnnotateBlend";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  pre: {
    overflowX: "auto",
  },
}));

let colA = "rgb(179, 245, 66)";
let colB = "#42f5f5";
let colC = "#4B46CD";

const init = [
    {
      "start": 6,
      "end": 14,
      "text": "are many",
      "tag": "tagA",
      "color": "rgb(179, 245, 66)"
    },
    {
      "start": 10,
      "end": 23,
      "text": "many stories ",
      "tag": "tagC",
      "color": "#4B46CD"
    },
    {
      "start": 78,
      "end": 82,
      "text": "road",
      "tag": "tagB",
      "color": "#42f5f5"
    }
  ];
//node_modules/react
export default function Demo() {
  const classes = useStyles();
  const [value, setValue] = useState(init);
  const [tag, setTag] = useState("tagA");

  const handleChange = (value: any) => {
    setValue(value);
  };

  interface Colors {
    [key: string]: string;
    tagA: string;
    tagB: string;
  }

  const COLORS: Colors = {
    tagA: colA,
    tagB: colB,
    tagC: colC,
  };

  return (
    <Paper className={classes.main}>
      <Box p={2}>
        <h3>TextAnnotateBlend</h3>
      </Box>
      <Box pl={2} mb={2}>
        <strong>Simply highlight to tag & Click to untag</strong>
      </Box>
      
      <Paper elevation={2}>
      <Box p={2}>
        <TextAnnotateBlend
          style={{
            maxWidth: 500,
            fontSize: "1.2rem",
            // lineHeight: 5,
          }}
          content="There are many stories about the origins of cyclo-cross. One is that European road racers in the early 1900s would race each other to the next town over from them and that they were allowed to cut through farmers' fields or over fences, or take any other shortcuts, in order to make it to the next town first. This was sometimes called steeple chase as the only visible landmark in the next town was often the steeple."
          onChange={handleChange}
          value={value}
          getSpan={(span: any) => ({
            ...span,
            tag: tag,
            color: COLORS[tag],
          })}
        />
        
      </Box>
      </Paper>

      <Box p={2}>
        <FormControl variant="outlined">
          <Select
            //   labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
            value={tag}
            onChange={(e) => setTag(e.target.value as string)}
          >
            <MenuItem value="tagA">tagA</MenuItem>
            <MenuItem value="tagB">tagB</MenuItem>
            <MenuItem value="tagC">tagC</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box pt={2}>
        <h3>Current Stored Value</h3>
      </Box>
      <Paper elevation={2} className={classes.pre}>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </Paper>
      <Box pt={3}>
        <h3>Sample Code</h3>
      </Box>
      <Box pb={3}>
      <SyntaxHighlighter language="javascript" style={docco}>
        {`
import { TextAnnotateBlend } from "react-text-annotate-blend";

App = () => {
    const [value, setValue] = useState(init);
    const [tag, setTag] = useState("tagA");

    const handleChange = (value) => {
        setValue(value);
    };

    const COLORS = {
        tagA: "rgb(179, 245, 66)",
        tagB: "#42f5f5",
    };

    return (
        <>
            <TextAnnotateBlend
                style={{
                maxWidth: 500,
                fontSize: "1.2rem",
                }}
                content="This component lets you blend annotations!"
                onChange={handleChange}
                value={value}
                getSpan={(span) => ({
                    ...span,
                    tag: tag,
                    color: COLORS[tag],
                })}
            />
            <select value={tag} onChange={(e) => setTag(e.target.value)}>
                <option value="tagA">tagA</option>
                <option value="tagB">tagB</option>
            </select>

            <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
    );
    }`}
      </SyntaxHighlighter>
      </Box>
      <Box pt={3}>
        <h3>Props (Coming Soon)</h3>
      </Box>
    </Paper>
  );
}
