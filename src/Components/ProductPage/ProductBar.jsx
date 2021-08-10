import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "../home-page/ItemCard";
import LeftArrow from "../../assets/images/leftArrow.png";

const ProductBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.MYHead}>
      <div className={classes.StockBar}>
        <div>
          <img src={LeftArrow} alt="" />
        </div>
        <div>
          <div className={classes.StockTitle}>KHC</div>
          <div className={classes.StockCompany}>Kraft Heinz Co</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductBar;
const useStyles = makeStyles((theme) => ({
  MYHead: {
    height: "50px",
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: "25px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  StockBar: {
    marginTop: "10px",
    display: "flex",
  },
  StockTitle: {
    fontWeight: "500",
  },
  StockCompany: {
    color: "#7B7B7B",
    fontSize: "10px",
  },
}));
