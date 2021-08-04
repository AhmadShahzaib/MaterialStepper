import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import graphRed from "../../assets/images/graphRed.svg";
import UpGreen from "../../assets/images/UpGreen.svg";

function ItemCard() {
  const classes = useStyles();

  return (
    <div className={classes.Card}>
      <div className={classes.Stock}>
        <div className={classes.StockTitle}>KHC</div>
        <div className={classes.StockCompany}>Kraft Heinz Co</div>
      </div>
      <div className={classes.GraphImage}>
        <img src={graphRed} alt="" />
      </div>
      <div className={classes.stockStatus}>
        <div className={classes.stockPrice}>$1,664.96</div>
        <div className={classes.stockPercentage}>
          <span>
            <img src={UpGreen} alt="" />
          </span>
          <span>1.22%</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
const useStyles = makeStyles((theme) => ({
  Card: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 10px",
  },
  Stock: {},
  StockTitle: {
    fontWeight: "500",
  },
  StockCompany: {
    color: "#7B7B7B",
    fontSize: "10px",
  },
  GraphImage: {},
  stockStatus: {
    textAlign: "right",
  },
  stockPrice: {
    color: "#7B7B7B",
    fontSize: "14px",
  },
  stockPercentage: {
    color: "#F94946",
    fontSize: "10px",
  },
}));
