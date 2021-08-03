import React, { useState } from "react";
import Welcome from "../../assets/images/welcome.png";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

const WelcomeComponent = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState("1");

  const handleStepper = (e) => {
    setActiveStep(e.target.name);
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.ImgWrapper}>
        <img src={Welcome} alt="welcome-logo" />
      </div>
      <div>
        {activeStep === "1" ? (
          <StepOne />
        ) : activeStep === "2" ? (
          <StepTwo />
        ) : activeStep === "3" ? (
          <StepThree />
        ) : (
          ""
        )}
      </div>
      <div className={classes.StepperBtnWrapper}>
        <button
          name={1}
          onClick={handleStepper}
          className={`${classes.StepperBtn} ${
            activeStep === "1"
              ? ` ${classes.Active}`
              : activeStep === "2"
              ? ""
              : activeStep === "3"
              ? ""
              : ""
          }`}
        ></button>
        <button
          name={2}
          onClick={handleStepper}
          className={`${classes.StepperBtn} ${
            activeStep === "1"
              ? ""
              : activeStep === "2"
              ? `${classes.Active}`
              : activeStep === "3"
              ? ""
              : ""
          }`}
        ></button>
        <button
          name={3}
          onClick={handleStepper}
          className={`${classes.StepperBtn} ${
            activeStep === "1"
              ? ""
              : activeStep === "2"
              ? ""
              : activeStep === "3"
              ? `${classes.Active}`
              : ""
          }`}
        ></button>
      </div>
      <div>
        <div className={classes.SignupBtnWrapper}>
          <Button variant="contained" className={classes.SignupBtn}>
            Sign up
          </Button>
        </div>
        <div className={classes.SignupBtnWrapper}>
          <Button className={classes.SkipBtn} variant="text">
            Skip
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default WelcomeComponent;

const useStyles = makeStyles((theme) => ({
  ImgWrapper: {
    display: "flex",
    justifyContent: "center",
    objectFit: "contain",
    marginTop: "40%",
  },

  StepperBtnWrapper: {
    display: "flex",
    justifyContent: "center",
  },

  StepperBtn: {
    backgroundColor: "#d0cfd4",
    height: "10px",
    borderRadius: "50%",
    border: "none",
    marginRight: "10px",
    marginTop: "70px",
    marginBottom: "70px",
    cursor: "pointer",
  },
  Active: {
    backgroundColor: "#7966ff",
  },
  SignupBtnWrapper: {
    display: "flex",
    justifyContent: "center",
  },

  SignupBtn: {
    backgroundColor: "#7966fe",
    color: "#fff",
    fontWeight: 500,
    textTransform: "none",
    borderRadius: "22px",
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

  SkipBtn: {
    color: "#7966fe",
    textTransform: "none",
    fontWeight: 500,
    boxShadow: "none",
    width: "90%",
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
