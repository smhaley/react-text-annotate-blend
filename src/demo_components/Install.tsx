import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula, github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  installBox: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: theme.spacing(3),
  },
}));

const installText = "npm i react-text-annotate-blend";

interface Props {
  darkMode: boolean;
}

const Install: React.FC<Props> = ({darkMode}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    setOpen(true);
    navigator.clipboard.writeText(text);
  };

  const handleCopyClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleCopyClose}>
        <Alert onClose={handleCopyClose} severity="success">
          Copied to clipboard
        </Alert>
      </Snackbar>
      <Box className={classes.installBox}>
        <Box pr={3}>
          <strong>Installation: </strong>
        </Box>
        <Box>
          <SyntaxHighlighter
            language="javascript"
            style={darkMode ? dracula : github}
          >
            {`> ${installText}`}
          </SyntaxHighlighter>
        </Box>
        <Box>
          <IconButton onClick={() => copyToClipboard(installText)}>
            <FileCopyIcon color="secondary" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Install;
