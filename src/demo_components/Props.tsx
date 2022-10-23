import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Box from "@material-ui/core/Box";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import github from "prism-react-renderer/themes/github";
import dracula from "prism-react-renderer/themes/dracula";
import Highlight, { defaultProps } from "prism-react-renderer";

const content = [
  { name: "content", type: "string", desc: "Input string to annotate." },
  {
    name: "value",
    type: "AnnotateBlendTag[]",
    desc: "List of annotations to mark",
  },
  {
    name: "onChange?",
    type: "(value: AnnotateBlendTag[]) => void",
    dec: "Handler used to set updated value returned from <TextAnnotateBlend/>",
  },
  {
    name: "getSpan?",
    type: "(span: AnnotateBlendTag) => AnnotateBlendTag",
    desc: "Passes color and label values along with any additional metadata to highlighted text spans",
  },
  {
    name: "style?",
    type: "string",
    desc: "Style attributed to the text container.",
  },
  {
    name: "className?",
    type: "string",
    desc: "CSS class passed to the inner component",
  },
];

const type = `
    type AnnotateBlendTag = {
      start: number;   //tag start position
      end: number;     //tag end position
      text?: string;   //tag text
      color?: string;  //tag color
      tag?: string;    //tag label
    };
`;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface PropsProps {
  mode: string;
}

const Props: React.FC<PropsProps> = ({ mode }) => {
  const classes = useStyles();

  const rows = content.map((content) => {
    const { name, type, desc } = content;
    return { name, type, desc };
  });

  const typeContent = (
    <Highlight
      {...defaultProps}
      code={type}
      theme={mode === "dark" ? dracula : github}
      language="javascript"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );

  return (
    <>
      <Box pt={2}>
        <h3>Props</h3>
        <p>
          Inputs for the value prop should should generically match the{" "}
          <strong>Types</strong> described below
        </p>
      </Box>
      <Box pt={4} pb={4}>
        <strong>AnnotateBlendTag</strong>
        <p>The primary type of the blending component.</p>
        <p>Additional expansion of this type is valid.</p>
        <Paper elevation={2}>{typeContent}</Paper>
      </Box>
      <Paper elevation={2}>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell align="left">
                  <b>Type</b>
                </TableCell>
                <TableCell align="left">
                  <b>Description</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <pre>{row.name}</pre>
                  </TableCell>
                  <TableCell align="left">
                    <pre>{row.type}</pre>
                  </TableCell>
                  <TableCell align="left">{row.desc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box pt={4} pb={4}>
        <b>TextAnnotateBlend only supports a single overlap of annotations.</b>
      </Box>
    </>
  );
};

export default Props;
