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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface PropsProps {
  mode: string;
  propContent: {
    tableContent: {
      name: string;
      type: string;
      desc: string;
    }[];
    headingContent: {
      heading: string;
      typeName: string;
      subHeading: string[];
    };
  };
  tagType: string;
}

const Props: React.FC<PropsProps> = ({ mode, propContent, tagType }) => {
  const classes = useStyles();

  const { tableContent, headingContent } = propContent;

  const cols = ["Name", "Type", "Description"];

  const typeContent = (
    <Highlight
      {...defaultProps}
      code={tagType}
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
        <h3>{headingContent.heading}</h3>
        <p>
          Inputs for the value prop should should generically match the{" "}
          <strong>Types</strong> described below
        </p>
      </Box>
      <Box pt={4} pb={4}>
        <strong>{headingContent.typeName}</strong>
        {headingContent.subHeading.map((txt, idx) => (
          <p key={idx}>{txt}</p>
        ))}

        <Paper elevation={2}>{typeContent}</Paper>
      </Box>
      <Paper elevation={2}>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {cols.map((colName, idx) => (
                  <TableCell key={colName} align={idx > 0 ? "left" : undefined}>
                    <b>{colName}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableContent.map((row) => (
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
    </>
  );
};

export default Props;
