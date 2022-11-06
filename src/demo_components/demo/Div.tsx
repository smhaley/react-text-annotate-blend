import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  demoDiv: {
    overflowX: "auto",
  },
}));

const Div: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <Box className={classes.demoDiv} p={2}>
        {children}
      </Box>
    </Paper>
  );
};

export default Div;
