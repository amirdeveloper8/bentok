import { useState } from "react";
import useInput from "../../../hooks/use-input";
import classes from "./custom-input.module.css";

const CustomInput = (props) => {
  const { type, className, placeholder, label, id, name, format, alertText } =
    props;

  const {
    value: inputValue,
    isValid: inputIsValid,
    hasError: inputHasError,
    valueChangeHandler: inputChangeHandler,
    inputBlurHandler: elBlurHandler,
    reset: resetInput,
  } = useInput(format);

  const [showLabel, setShowLabel] = useState(false);

  const resetHandler = (e) => {
    e.preventDefault();
    resetInput();
  };

  let formGroupClass = classes.formGroup;

  if (inputHasError) {
    formGroupClass = `${classes.error} ${classes.formGroup}`;
  } else {
    formGroupClass = classes.formGroup;
  }

  const blurHandler = () => {
    console.log(inputValue, inputIsValid);
    if (inputIsValid) {
      props.getValues(inputValue);
    }
  };

  return (
    <div
      className={className ? `${className} ${formGroupClass}` : formGroupClass}
      onBlur={blurHandler}
    >
      <label
        htmlFor={id}
        className={classes.label}
        className={
          !showLabel ? classes.label : `${classes.label} ${classes.labelShow}`
        }
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={inputValue}
        onChange={inputChangeHandler}
        onBlur={elBlurHandler}
        placeholder={placeholder}
        onFocus={() => setShowLabel(true)}
      />
      {inputHasError && <alert className={classes.alert}> {alertText}</alert>}
      {inputValue && (
        <button className={classes.close} onClick={resetHandler}>
          +
        </button>
      )}
    </div>
  );
};

export default CustomInput;
