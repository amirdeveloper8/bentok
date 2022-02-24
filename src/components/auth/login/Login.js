import { useState } from "react";
import CustomButton from "../../UI/Button/CustomButton";
import CustomInput from "../../UI/Input/CustomInput";
import classes from "./login.module.css";

const Login = () => {
  const emailValidate = (value) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(value);
  };

  const [emailValue, setEmailValue] = useState("");
  const [postalCodeValue, setPostalCodeValue] = useState("");

  console.log("email", emailValue);
  console.log("postal", postalCodeValue);

  return (
    <section className={classes.login}>
      <div className={classes.content}>
        <img src="./images/logo.png" alt="logo" className={classes.logo} />
        <img
          src="./images/circle.png"
          alt="circle"
          className={classes.circle}
        />
        <img
          src="./images/Rectangle.png"
          alt="Rectangle"
          className={classes.rectangle}
        />

        <div className={classes.worm}>
          <img src="./images/worm.png" alt="worm" />
        </div>

        <div className={classes.formHeader}>
          <h1>همین اول کار امتیاز بگیر!</h1>
          <h2>
            می‌تونی بیخیال این صفحه بشی، ولی اگه الان کاملش کنی بیشتر امتیاز
            می‌گیری.
          </h2>
        </div>

        <form>
          <CustomInput
            type="text"
            placeholder="آدرس ایمیلت رو اینجا بنویس"
            label="آدرس ایمیل"
            id="email"
            name="Email"
            format={(value) => emailValidate(value)}
            alertText="ایمیل را به درستی وارد کنید!"
            getValues={(val) => setEmailValue(val)}
          />

          <CustomInput
            type="number"
            placeholder="آدرس ایمیلت رو اینجا بنویس"
            label="آدرس ایمیل"
            id="testText"
            name="test"
            format={(value) => value.trim().length === 10}
            alertText="کدپستی را به درستی وارد کنید!"
          />
          <CustomInput
            type="text"
            placeholder="آدرس ایمیلت رو اینجا بنویس"
            label="آدرس ایمیل"
            id="testText"
            name="test"
            format={(value) => value.trim().length > 0}
            alertText="ایمیل را به درستی وارد کنید!"
          />
          <CustomInput
            type="text"
            placeholder="کدپستی خونه رو بنویس"
            label="کدپستی"
            id="postalcode"
            name="postal_code"
            format={(value) => value.trim().length === 10}
            alertText="کدپستی ده رقمیه!!"
            getValues={(val) => setPostalCodeValue(val)}
          />
          <CustomButton steps={0} />
        </form>
      </div>
    </section>
  );
};

export default Login;
