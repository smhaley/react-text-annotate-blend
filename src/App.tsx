import React, { useState } from "react";
import TextAnnotateBlend from "./components/TextAnnotateBlend"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Demo from './Demo'
// import MenuIcon from '@material-ui/icons/Menu';


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
}));

export default function App() {
  const classes = useStyles();
  return (
  <React.Fragment>
    <CssBaseline />
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            react-text-annotate-blend
          </Typography>
          <Button color="inherit" href={'https://github.com/smhaley/react-text-annotate-blend'}>source</Button>
        </Toolbar>
      </AppBar>
    </div>
    <Container maxWidth="md" style={{height: '100%' }}>
       <Box m={3}>
       <Demo/>
       </Box>

      </Container>
  </React.Fragment>
  );
}
