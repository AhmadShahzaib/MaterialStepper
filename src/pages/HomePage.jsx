import React from "react";
import Header from "../Components/home-page/Header";
import ProductSection from "../Components/home-page/ProductSection";
import { makeStyles } from "@material-ui/core/styles";

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.ParentComponent}>
      <Header />
      <ProductSection />
    </div>
  );
};

export default HomePage;

const useStyles = makeStyles((theme) => ({
  ParentComponent: {
    backgroundColor: "#b7b5b529",
  },
}));
