import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import IdentityImg from "../assets/images/identity.png";
import Klogo from "../assets/images/logoKWC.png";
import { Button } from "@material-ui/core";
import SplashImage from "../assets/images/Component.png";

const LogoScreen = () => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.imageSection}>
      <div
        className={classes.LogoSection}
        onClick={() => {
          history.push("/stepper");
        }}
      >
        <img src={Klogo} alt="" />
      </div>
      <div className={classes.MainSection}>
        <div className={classes.Identity}>Verification</div>
        <div className={classes.IdentityImg}>
          <img src={IdentityImg} alt="" />
        </div>
        <div className={classes.AlmostTag}>Almost There</div>
        <div className={classes.AlmostPara}>
          <span className={classes.tagOne}>
            Now we need to verify your identity
          </span>
          <span className={classes.tagOne}>documents and proof of Address</span>
        </div>
        <div className={classes.ButtonSection}>
          <div className={classes.SignupBtnWrapper}>
            <Button variant="contained" className={classes.NotNow}>
              Not now
            </Button>
          </div>
          <div className={classes.SignupBtnWrapper}>
            <Button className={classes.Continue} variant="text">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScreen;

const useStyles = makeStyles((theme) => ({
  imageSection: {
    background: `url(${SplashImage}) no-repeat`,
    backgroundColor: "#b7b5b529",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
  },
  LogoSection: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  Identity: {
    display: "flex",
    justifyContent: "center",

    fontWeight: "bold",
    marginTop: "40px",
    fontSize: "20px",
  },
  IdentityImg: {
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
  },
  AlmostTag: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#52D6AB",
  },
  AlmostPara: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "40px",
    fontSize: "14px",
    color: "#5A5A5A",
  },
  tagOne: {
    display: "flex",
    justifyContent: "center",
  },
  ButtonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "200px",
  },
  MainSection: {
    marginTop: "90px",
    backgroundColor: "white",
    height: "100vh",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    marginLeft: "15px",
    marginRight: "15px",
  },
  logTitle: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
    marginTop: "5px",
    Fontsize: "29px",
  },
  NotNow: {
    backgroundColor: "#ECECEC",
    color: "black",
    fontSize: "16px",

    textTransform: "none",
    borderRadius: "17px",
    boxShadow: "none",
    padding: "10px 0px",
    width: "90%",
    "&:hover": {
      backgroundColor: "#7966fe",
      borderColor: "#7966fe",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#7966fe",
      borderColor: "#7966fe",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
  Continue: {
    backgroundImage: "linear-gradient(to left, #1FCFBD ,#88DD97)",
    color: "#fff",
    fontSize: "16px",
    textTransform: "none",
    borderRadius: "17px",
    boxShadow: "none",
    padding: "10px 0px",
    width: "90%",
    "&:hover": {
      backgroundColor: "#7966fe",
      borderColor: "#7966fe",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#7966fe",
      borderColor: "#7966fe",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },

  SignupBtnWrapper: {
    // display: "flex",
    // justifyContent: "center",
    width: "175px",
  },
}));
