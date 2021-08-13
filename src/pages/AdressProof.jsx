import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import IdentityImg from "../assets/images/identity.png";
import Klogo from "../assets/images/logoKWC.png";
import { Button } from "@material-ui/core";
import SplashImage from "../assets/images/Component.png";
import Down from "../assets/images/downIcon.png";
import Next from "../assets/images/ForwardArrow.svg";

const AdressProof = () => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.imageSection}>
      <div className={classes.MainSection}>
        <div className={classes.Identity}>Proof Of Address</div>

        <div className={classes.AlmostPara}>lets verify your documents</div>
        <div className={classes.IdentityImg}>
          <Button variant="outlined" className={classes.Identification}>
            <span>Country</span>
            <img src={Next} alt="" />
          </Button>
        </div>

        <div className={classes.tagOne}>
          <Button variant="outlined" className={classes.Form}>
            Proof Of Address
          </Button>
        </div>
        <div className={classes.tagOne}>
          <Button variant="outlined" className={classes.Form}>
            Address line 1
          </Button>
        </div>
        <div className={classes.tagOne}>
          <Button variant="outlined" className={classes.Form}>
            Address line 2
          </Button>
        </div>
        <div className={classes.tagOne}>
          <Button variant="outlined" className={classes.Form}>
            City
          </Button>
        </div>
        <div className={classes.tagOne}>
          <Button variant="outlined" className={classes.Form}>
            Province
          </Button>
        </div>
        <div className={classes.tagOne}>
          <Button variant="outlined" className={classes.Form}>
            Postal Code
          </Button>
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

export default AdressProof;

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
    borderBottom: "1px solid #E8E8E8",
    fontWeight: "bold",
    marginTop: "40px",
    paddingBottom: "20px",
    fontSize: "20px",
    marginLeft: "25px",
    marginRight: "25px",
  },
  IdentityImg: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
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

    marginTop: "40px",
    fontSize: "14px",
    color: "#5A5A5A",
  },
  tagOne: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  ButtonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
  },
  MainSection: {
    marginTop: "50px",
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
  Identification: {
    backgroundColor: "#ECECEC",
    color: "black",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    textTransform: "none",
    borderRadius: "17px",
    boxShadow: "none",
    padding: "10px 0px",
    borderColor: "#28D1BA",

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
    "& span": {
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "20px",
      marginRight: "20px",
    },
  },
  Form: {
    backgroundColor: "#ECECEC",
    color: "black",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    textTransform: "none",
    borderRadius: "17px",
    boxShadow: "none",
    padding: "10px 0px",
    borderColor: "#28D1BA",

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
    "& span": {
      marginLeft: "40px",
      display: "flex",
      justifyContent: "start",
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
