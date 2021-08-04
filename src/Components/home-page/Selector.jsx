import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
function Selector() {
  const classes = useStyles();
  const [product, setProduct] = React.useState("");
  const handleChange = (event) => {
    setProduct(event.target.value);
  };
  return (
    <>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="Stock-label">Stock Search</InputLabel>
        <Select
          labelId="Stock-label"
          id="Stock"
          value={product}
          className={classes.SelectButton}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="KCH">KCH</MenuItem>
          <MenuItem value="TMS">TMS</MenuItem>
          <MenuItem value="PGR">PGR</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default Selector;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  SelectButton: {
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
}));
