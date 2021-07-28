import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const StepOne=()=> {
    const classes = useStyles();
    return (
        <div className={classes.Steps}>
            <Typography  component="h1" variant="h5">
                Let's get started
            </Typography>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            </p>
        </div>
    )
};
export default StepOne;
const useStyles = makeStyles((theme) => ({
    Steps:{
        display: 'flex',
       
      },
}));