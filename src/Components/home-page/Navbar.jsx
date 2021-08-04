import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import navIcon from "../../assets/images/navIcon.svg";
import searchIcon from "../../assets/images/searchIcon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  MyAppBar: { boxShadow: "none" },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        color="transparent"
        className={classes.MyAppBar}
        position="static"
      >
        <Toolbar className={classes.toolbar}>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <img src={navIcon} alt="" />
            </IconButton>
          </div>

          <div>
            <IconButton aria-label="search" color="inherit">
              <img src={searchIcon} alt="" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
