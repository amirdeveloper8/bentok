import { useEffect, useState } from "react";
import classes from "./custom-input.module.css";

const CustomSelect = (props) => {
  const { className, defaultValue, label, id, name, error, alertText } = props;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    props.getValue(value);
    console.log(value);
  }, [value]);

  console.log(value);

  let formGroupClass = classes.formGroup;
  return (
    <div
      className={className ? `${className} ${formGroupClass}` : formGroupClass}
      //   onBlur={blurHandler}
    >
      {!value && (
        <label htmlFor={id} className={classes.lableSlected}>
          {label}
        </label>
      )}

      <select
        name={name}
        id={id}
        defaultValue={defaultValue ? defaultValue : ""}
        value={value}
        onChange={handleChange}
      >
        {props.children}
      </select>
      {error && <span className={classes.alert}>{alertText}</span>}
    </div>
  );
};

export default CustomSelect;
