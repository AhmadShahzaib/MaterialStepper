import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const StepOne = () => {
  const classes = useStyles();

  return (
    <div className={classes.Steps}>
      <div className={classes.StepsTitle}>Let's get started</div>
      <div className={classes.StepsContent}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ullam
        dolor debitis, eaque temporibus eius qui quasi dicta ex incidunt sequi
        modi atque, aliquam ipsa optio quia laudantium explicabo quos!
      </div>
    </div>
  );
};

export default StepOne;

const useStyles = makeStyles((theme) => ({
  Steps: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  StepsTitle: {
    fontSize: "20px",
    fontWeight: 600,
    margin: "30px 0px",
  },
  StepsContent: {
    fontWeight: 500,
    color: "#9f9f9f",
    lineHeight: "25px",
    padding: "0px 20px",
  },
}));
