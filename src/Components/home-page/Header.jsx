import React from "react";
import Navbar from "./Navbar";
import homeIcon from "../../assets/images/homeIcon.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.MYHead}>
      <Navbar />
      <div>
        <div className={classes.Title}>
          <div>
            <span>
              <img src={homeIcon} alt="" />
            </span>
            <span className={classes.WelcomeTag}>Welcome to</span>
          </div>
          <div className={classes.GlobalTag}>Global Trading</div>
        </div>
        <div className={classes.SignupBtnWrapper}>
          <Button variant="contained" className={classes.SignupBtn}>
            Sign up/Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  SignupBtnWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  MYHead: {
    height: "200px",
    backgroundColor: "#88DD97",
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    backgroundImage: "linear-gradient(to right, #1FCFBD ,#88DD97)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Title: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  GlobalTag: {
    fontSize: "24px",
  },
  WelcomeTag: { marginLeft: "7px", fontSize: "20px" },
  SignupBtn: {
    marginBottom: "-25px",
    padding: "16px",
    backgroundColor: "white",
    boxShadow: " 0px 10px 13px 1px #77777752",
    color: "#52D6AB",
    textTransform: "none",
    fontWeight: 500,
    borderRadius: "22px",
    width: "70%",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#fff",
      borderColor: "#fff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#fff",
      borderColor: "#fff",
    },
    "&:focus": {
      boxShadow: "none",
    },
  },
}));
