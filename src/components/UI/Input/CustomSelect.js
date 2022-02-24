import { useEffect, useState } from "react";
import classes from "./custom-input.module.css";

const CustomSelect = (props) => {
  const { className, label, id, name, submitForm, step, alertText } = props;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    props.getValue(value);
    if (value) {
      props.updateSteps(true);
    } else {
      props.updateSteps(false);
    }
  }, [value]);

  let formGroupClass = classes.formGroup;
  return (
    <div
      className={className ? `${className} ${formGroupClass}` : formGroupClass}
    >
      {!value && (
        <label htmlFor={id} className={classes.lableSlected}>
          {label}
        </label>
      )}

      <select name={name} id={id} value={value} onChange={handleChange}>
        {props.children}
      </select>
      {submitForm && !step && (
        <span className={classes.alert}>{alertText}</span>
      )}
    </div>
  );
};

export default CustomSelect;
