import { useState } from "react";
import CustomButton from "../../UI/Button/CustomButton";
import CustomInput from "../../UI/Input/CustomInput";
import CustomSelect from "../../UI/Input/CustomSelect";
import classes from "./login.module.css";

const Login = () => {
  const emailValidate = (value) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(value);
  };

  const [emailValue, setEmailValue] = useState("");
  const [postalCodeValue, setPostalCodeValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);

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

          <CustomSelect
            label="اسم شهرت رو انتخاب کن"
            id="cities"
            name="Cities"
            alertText="هیچ شهری انتخاب نشده"
            getValue={(val) => setCityValue(val)}
            error={cityError}
          >
            <option value="tehran">تهران</option>
            <option value="isfahan">اصفهان</option>
            <option value="shiraz">شیراز</option>
            <option value="ahwaz">اهواز</option>
            <option value="tehran">تبریز</option>
            <option value="tehran">رشت</option>
          </CustomSelect>

          <CustomSelect
            label="اسم استانت رو انتخاب کن"
            id="state"
            name="States"
            alertText="هیچ استانی انتخاب نشده"
            getValue={(val) => setStateValue(val)}
            error={stateError}
          >
            <option value="tehran">تهران</option>
            <option value="isfahan">اصفهان</option>
            <option value="shiraz">شیراز</option>
            <option value="ahwaz">اهواز</option>
            <option value="tehran">تبریز</option>
            <option value="tehran">رشت</option>
          </CustomSelect>

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
