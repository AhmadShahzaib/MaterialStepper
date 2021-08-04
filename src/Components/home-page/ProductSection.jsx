import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GetStarted from "../../assets/images/GetStarted.svg";
import ForwardArrow from "../../assets/images/ForwardArrow.svg";

const ProductSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.MainSection}>
      <div className={classes.GetStartedTag}>
        <div className={classes.BeginnerTag}>
          <div className={classes.StartedImage}>
            <img src={GetStarted} alt="" />
          </div>
          <div className={classes.TextTag}>
            <div className={classes.BeginnerTitle}>Beginner's Guide</div>
            <div className={classes.BeginnerSubTitle}>
              Learn how to get started
            </div>
          </div>
        </div>
        <div className={classes.ForwardImage}>
          <img src={ForwardArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
const useStyles = makeStyles((theme) => ({
  MainSection: {
    marginTop: "90px",
    backgroundColor: "white",
    height: "600px",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    borderBottomLeftRadius: "40px",
    borderBottomRightRadius: "40px",
    marginLeft: "15px",
    marginRight: "15px",
  },
  GetStartedTag: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "17px",
    paddingRight: "17px",
    paddingTop: "30px",
  },
  BeginnerTag: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  TextTag: {
    marginLeft: "10px",
  },
  StartedImage: {
    paddingTop: "7px",
  },
  BeginnerTitle: {
    //   fontFamily: '',
    paddinBottom: "1px",
    fontSize: "16px",
  },
  BeginnerSubTitle: {
    //   fontFamily: '',
    fontSize: "10px",
  },
  ForwardImage: {
    paddingTop: "7px",
  },
}));
