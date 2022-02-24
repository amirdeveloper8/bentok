import { useEffect, useState } from "react";
import useInput from "../../../hooks/use-input";
import classes from "./custom-input.module.css";

const CustomInput = (props) => {
  const {
    type,
    className,
    placeholder,
    label,
    id,
    name,
    format,
    alertText,
    step,
    submitForm,
  } = props;

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
    props.updateSteps(false);
  };

  let formGroupClass = classes.formGroup;

  if (inputHasError) {
    formGroupClass = `${classes.error} ${classes.formGroup}`;
  } else {
    formGroupClass = classes.formGroup;
  }

  useEffect(() => {
    if (inputIsValid) {
      props.getValues(inputValue);
      props.updateSteps(true);
    } else {
      props.getValues("");
      props.updateSteps(false);
    }
  }, [inputIsValid, inputValue]);

  return (
    <div
      className={className ? `${className} ${formGroupClass}` : formGroupClass}
      // onBlur={blurHandler}
    >
      <label
        htmlFor={id}
        className={
          !showLabel
            ? `${classes.label}`
            : `${classes.label} ${classes.labelShow}`
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
      {(inputHasError || (submitForm && !step)) && (
        <span className={classes.alert}> {alertText}</span>
      )}
      {inputValue && (
        <button className={classes.close} onClick={resetHandler}>
          +
        </button>
      )}
    </div>
  );
};

export default CustomInput;
