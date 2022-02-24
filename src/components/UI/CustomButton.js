import { useEffect } from "react";
import classes from "./custom-button.module.css";

const CustomButton = (props) => {
  const noStepsClasses = `${classes.noStepsClasses} ${props.stepsClass}`;
  const btnClasses = `${classes.button} ${props.btnClass}`;

  let firstStepsClasses = `${classes.firstStepsClasses}`;
  let lastStepsClasses = `${classes.lastStepsClasses}`;
  if (props.steps === 25) {
    firstStepsClasses = `${classes.firstStepsClasses} ${classes.step1}`;
  } else if (props.steps >= 50) {
    firstStepsClasses = `${classes.firstStepsClasses} ${classes.step2}`;
  }
  if (props.steps === 70) {
    lastStepsClasses = `${classes.lastStepsClasses} ${classes.step3}`;
  } else if (props.steps === 100) {
    lastStepsClasses = `${classes.lastStepsClasses} ${classes.stepsDone}`;
  }

  return (
    <div className={classes.btnContainer}>
      <div className={noStepsClasses} />
      <div className={firstStepsClasses} />
      <div className={lastStepsClasses} />
      <button className={btnClasses} onClick={props.onClick}>
        {props.steps}
      </button>
    </div>
  );
};

export default CustomButton;
