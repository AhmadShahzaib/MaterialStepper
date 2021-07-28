import React from 'react';
import Welcome from '../../assets/images/welcome.png';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Card, CardActions, CardContent, Container, MobileStepper } from '@material-ui/core';
import {KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
const WelcomeComponent=() =>{
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };
  function switchStep() {
    
    switch (activeStep) {
      case 0:
    return (
      <>
        <StepOne className={classes.Steps}/>
      </>
    );
    case 1:
      return (
        <>
          <StepTwo/>
        </>
      );
      case 2:
        return (
          <>
            <StepThree className={classes.Steps}/>
          </>
        );  
  }
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container component="main" maxWidth="xs" >
    <div style={{display:"flex",
    justifyContent:"center",}} className={classes.root} >
      <Card className={classes.MyCard}>
      <CardContent>
      <div className={classes.Avatar}>
        <img src={Welcome} alt="default-logo"/>
       
      </div>
      <div >
        { switchStep()}
        <MobileStepper
      variant="dots"
      steps={3}
      position="static"
      activeStep={activeStep}
      className={classes.Stepper}
      nextButton={
        <> 
        <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
        </>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
      </div>
      </CardContent>
      <CardActions>

      <div className={classes.MyButton}>
        <div>

      <Button fullWidth variant="contained" color="primary">
  Login
</Button>
        </div>
        <div>

<Button fullWidth className={classes.Signup} >
  Signup
</Button>
        </div>
      </div>
      </CardActions>
      </Card>
    </div>
    </Container>
  )
}
export default WelcomeComponent;






const useStyles = makeStyles((theme) => ({
  root: 
  {
     
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  
  },
  MyCard:{
    
  },
  Avatar:{
    margin: theme.spacing(5), 
  },
  MyButton:{
    width:'100%',
    margin: theme.spacing(1),
  },
  Signup:{
    marginTop: theme.spacing(2),
  },
  Stepper:{
    backgroundColor: "",
  },
  Steps:{
    display: 'flex',
    justifyContent: 'center',
  },
}));
