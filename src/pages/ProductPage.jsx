import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductBar from "../Components/ProductPage/ProductBar";

const ProductPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.ParentComponent}>
      <ProductBar />
    </div>
  );
};

export default ProductPage;

const useStyles = makeStyles((theme) => ({
  ParentComponent: {
    backgroundColor: "#b7b5b529",
  },
}));
