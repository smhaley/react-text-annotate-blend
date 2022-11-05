import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Typography from "@material-ui/core/Typography";
import BrightnessIcon from "@material-ui/icons/Brightness7";
import { labelBySection } from "../constants";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      zIndex: 0,
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBarLight: {
      background: "linear-gradient(.25turn, #4b46cd,  #47b4e2)",
      marginLeft: drawerWidth,
      [theme.breakpoints.up("md")]: {
        zIndex: theme.zIndex.drawer + 1,
      },
    },
    appBarDark: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up("md")]: {
        zIndex: theme.zIndex.drawer + 1,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      padding: theme.spacing(3),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    rightIcon: {
      [theme.breakpoints.up("lg")]: {
        marginRight: "90%",
      },
    },
    rightIcons: {
      marginRight: "0%",

      [theme.breakpoints.up("lg")]: {
        marginRight: "5%",
      },
    },

    titleBarIcons: {
      marginLeft: "auto",
    },

    activeText: {
      color: theme.palette.secondary.main,
    },

    activeHeadText: {
      color: theme.palette.primary.main,
    },

    heading: {
      color: "white",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    componentHead: {
      fontFamily: "Lucida Console, Courier New, monospace",
    },
  })
);

interface Props {
  mode: string;
  setMode: (mode: string) => void;
  // active: number;
  activeSection: string;
  clickHandler: (index: number, section: string) => void;
  window?: () => Window;
}

const NavBar = (props: Props) => {
  const { window, clickHandler, activeSection } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  console.log('Nav Bar', props.activeSection);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const textAnnotateBlendOptions = Object.keys(labelBySection.blend);
  const textAnnotateOptions = Object.keys(labelBySection.tag);

  console.log(activeSection);
  const drawer = (
    <div>
      <div>
        <b> react-text-annotate-blend</b>
      </div>
      <div className={classes.toolbar} />
      <Box pb={2}>
        <b
          className={`${classes.componentHead} ${
            textAnnotateBlendOptions.includes(activeSection) && classes.activeHeadText
          }`}
        >{`<TextAnnotateBlend/>`}</b>
        <Divider />
        <List>
          {textAnnotateBlendOptions.map((text, index) => (
            <ListItem
              button
              style={{ backgroundColor: "transparent" }}
              key={text}
              onClick={() => clickHandler(index, text)}
            >
              {activeSection === text ? (
                <strong className={classes.activeText}>{Object.values(labelBySection.blend[text])}</strong>
              ) : (
                <strong>{Object.values(labelBySection.blend[text])}</strong>
              )}
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
      <Box mt={2}>
        <b
          className={`${classes.componentHead} ${
            textAnnotateOptions.includes(activeSection) ? classes.activeHeadText : undefined
          }`}
        >{`<TextAnnotate/>`}</b>
        <Divider />
        <List>
          {textAnnotateOptions.map((text, index) => (
            <ListItem
              button
              style={{ backgroundColor: "transparent" }}
              key={text}
              onClick={() => clickHandler(index, text)}
            >
              {activeSection === text ? (
                <strong className={classes.activeText}>{Object.values(labelBySection.tag[text])}</strong>
              ) : (
                <strong>{Object.values(labelBySection.tag[text])}</strong>
              )}
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={
          props.mode === "dark" ? classes.appBarDark : classes.appBarLight
        }
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.heading}>
            <b> react-text-annotate-blend</b>
          </Typography>
          <div className={classes.titleBarIcons}>
            <IconButton
              onClick={() =>
                props.setMode(props.mode === "dark" ? "light" : "dark")
              }
              aria-label="Light mode"
            >
              {props.mode === "light" ? (
                <Brightness4Icon />
              ) : (
                <BrightnessIcon />
              )}
            </IconButton>
            <Link href="https://github.com/smhaley/react-text-annotate-blend">
              <IconButton aria-label="github.com">
                <GitHubIcon />
              </IconButton>
            </Link>
          </div>
          <div className={classes.rightIcons}></div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default NavBar;
