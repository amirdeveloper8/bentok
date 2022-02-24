import { useEffect } from "react";
import classes from "./custom-button.module.css";

const CustomButton = (props) => {
  const { stepsClass, btnClass, steps, onClick } = props;

  const noStepsClasses = `${classes.noStepsClasses} ${stepsClass}`;
  const btnClasses = `${classes.button} ${btnClass}`;

  let firstStepsClasses = `${classes.firstStepsClasses}`;
  let lastStepsClasses = `${classes.lastStepsClasses}`;
  if (steps === 25) {
    firstStepsClasses = `${classes.firstStepsClasses} ${classes.step1}`;
  } else if (steps >= 50) {
    firstStepsClasses = `${classes.firstStepsClasses} ${classes.step2}`;
  }
  if (steps === 70) {
    lastStepsClasses = `${classes.lastStepsClasses} ${classes.step3}`;
  } else if (steps === 100) {
    lastStepsClasses = `${classes.lastStepsClasses} ${classes.stepsDone}`;
  }

  return (
    <div className={classes.btnContainer}>
      <div className={noStepsClasses} />
      <div className={firstStepsClasses} />
      <div className={lastStepsClasses} />
      <button className={btnClasses} onClick={onClick}>
        {steps}
      </button>
    </div>
  );
};

export default CustomButton;
