import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Install from "./Install";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  liveCode: {
    backgroundColor: "#f6f8fa",
  },
  error: {
    backgroundColor: "#ff5555",
    color: "#f9ded9",
  },
  demoDiv: {
    overflowX: "auto",
  },
  heading: {
    fontWeight: 400,
    fontSize: "1rem",
  },
}));

interface DemoProps {
  mode: string;
}

const Heading: React.FC<DemoProps> = ({ mode }) => {
  const classes = useStyles();

  return (
    <>
      <Box pt={2}>
        <h3>react-text-annotate-blend</h3>
      </Box>
      <Box p={2} className={classes.heading}>
        A React component library for interactive text annotation with full
        support for blended text annotations.
      </Box>
      <Box p={2} className={classes.heading}>
        This library currently contains two component, TextAnnotateBlend and TextAnnotate.
      </Box>
      <Box pl={2}>
        <Install mode={mode} />
      </Box>
    </>
  );
};

export default Heading;
