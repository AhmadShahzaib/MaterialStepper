import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GetStarted from "../../assets/images/GetStarted.svg";
import ForwardArrow from "../../assets/images/ForwardArrow.svg";
import { Button } from "@material-ui/core";
import StarSvg from "../../assets/images/001-star.png";

import UpIcon from "../../assets/images/upIcon.svg";
import Selector from "./Selector";
import ItemCard from "./ItemCard";

const ProductSection = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(true);
  const handleNavigator = (e) => {
    if (activeTab === true) setActiveTab(false);
    else if (activeTab === false) setActiveTab(true);
  };

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

      <div className={classes.ProductNavigator}>
        {}
        <div
          onClick={handleNavigator}
          className={`${classes.NavigatorButton} ${
            activeTab === true
              ? `${classes.Active}`
              : activeTab === false
              ? ""
              : ""
          }`}
        >
          Stock
        </div>
        <div
          onClick={handleNavigator}
          className={`${classes.NavigatorButton} ${
            activeTab === true
              ? ""
              : activeTab === false
              ? ` ${classes.Active}`
              : ""
          }`}
        >
          Crypto
        </div>
      </div>
      <div className={classes.Filters}>
        <div>
          <Button className={classes.AllButton} variant="contained">
            All
          </Button>
          <Button className={classes.StarButton} variant="contained">
            <img className={classes.ImgIcon} src={StarSvg} alt="" />
          </Button>
        </div>
        <div>
          <Button
            className={classes.AllButton}
            variant="contained"
            endIcon={<img src={UpIcon} alt="" />}
          >
            Market Cap
          </Button>
        </div>
      </div>
      <div className={classes.Selector}>
        <Selector />
      </div>
      <div>
        <ItemCard />
      </div>
      <div>
        <ItemCard />
      </div>
      <div>
        <ItemCard />
      </div>
      <div>
        <ItemCard />
      </div>
      <div>
        <ItemCard />
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
    marginBottom: "16px",
  },
  Active: {
    color: "#48D5AF !important",
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
    // fontFamily: "Poppins",
    paddinBottom: "1px",
    fontSize: "16px",
    color: "#000000",
  },
  BeginnerSubTitle: {
    // fontFamily: "Poppins",
    fontSize: "10px",
    color: "#5A5A5A",
  },
  ForwardImage: {
    paddingTop: "7px",
  },

  ProductNavigator: {
    display: "flex",
    justifyContent: "space-evenly",

    borderTop: "1px solid #E8E8E8",
    paddingTop: "16px",
    margin: "0px 10px",
  },
  NavigatorButton: {
    color: "#949494",
  },
  Filters: {
    display: "flex",
    justifyContent: "space-between",
    margin: " 15px 14px",
  },
  AllButton: {
    backgroundColor: "#ECECEC",
    color: "#5A5A5A",
    textTransform: "none",
    borderRadius: "22px",
    boxShadow: "none",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#ECECEC",
      borderColor: "#ECECEC",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#ECECEC",
      borderColor: "#ECECEC",
    },
    "&:focus": {
      boxShadow: "none",
    },
  },
  StarButton: {
    backgroundColor: "#ECECEC",
    padding: " 10px 16px",
    minWidth: "30px",
    textTransform: "none",
    borderRadius: "22px",
    boxShadow: "none",
    marginLeft: "5px",
    "&:hover": {
      backgroundColor: "#ECECEC",
      borderColor: "#ECECEC",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#ECECEC",
      borderColor: "#ECECEC",
    },
    "&:focus": {
      boxShadow: "none",
    },
  },
  ImgIcon: {
    height: "14px",
  },
  MarketButton: {
    backgroundColor: "#7966fe",
    color: "#fff",
    fontWeight: 500,
    textTransform: "none",
    borderRadius: "22px",
    boxShadow: "none",
    padding: "10px 0px",

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
  Selector: { display: "flex", justifyContent: "center", borderRadius: "12px" },
}));
