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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const makeRow = (name: string, type: any, desc: string) => {
  return { name, type, desc };
};

const rows = [
  makeRow("content", "string", "Input string to annotate"),
  makeRow("value", "array", "List of annotations to mark. "),
  makeRow("onChange", "function",  "handler used to set updated value"),
  makeRow(
    "getSpan",
    "function",
    "Passes current label and color to each new mouseUp event (annotation)"
  ),
  makeRow(
    "getSpan color",
    "string",
    "This represents the color of the new tag. Current only hex and rgb colors are accepted."
  ),
  makeRow(
    "getSpan tag",
    "string",
    "Represents the label on subsequent tags."
  ),
  makeRow(
    "style",
    "function",
    "Style attributed to the text container."
  ),
];

const Props: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box pt={2}>
        <h3>Props</h3>
      </Box>
      <TableContainer component={Paper}>
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
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box pt={4} pb={4}>
        <b>TextAnnotateBlend only supports a single overlap of annotations.</b>
      </Box>
    </>
  );
};

export default Props;
