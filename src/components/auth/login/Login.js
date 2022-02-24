import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { authActions } from "../../../store/auth";
import CustomButton from "../../UI/Button/CustomButton";
import CustomInput from "../../UI/Input/CustomInput";
import CustomSelect from "../../UI/Input/CustomSelect";
import classes from "./login.module.css";

const Login = () => {
  const emailValidate = (value) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(value);
  };

  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);

  const history = useHistory();

  const [emailValue, setEmailValue] = useState("");
  const [postalCodeValue, setPostalCodeValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [submitForm, setSubmitForm] = useState(false);

  const [steps, setSteps] = useState([
    { id: 1, step: false },
    { id: 2, step: false },
    { id: 3, step: false },
    { id: 4, step: false },
  ]);

  const stepsHandler = (id, value) => {
    const index = steps.findIndex((item) => item.id === id);

    const step = steps[index];

    const updatedStep = { ...step, step: value };

    const updatedSteps = [...steps];

    updatedSteps[index] = updatedStep;

    setSteps(updatedSteps);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setSubmitForm(true);

    if (steps.filter((item) => item.step !== false)) {
      const email = emailValue;
      const city = cityValue;
      const state = stateValue;
      const postalCode = postalCodeValue;

      dispatch(authActions.login({ email, city, state, postalCode }));
    }
  };

  useEffect(() => {
    if (authenticated) {
      history.push("/");
    }
  }, [authenticated, history]);

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

        <form onSubmit={submitHandler}>
          <CustomInput
            type="text"
            placeholder="آدرس ایمیلت رو اینجا بنویس"
            label="آدرس ایمیل"
            id="email"
            name="Email"
            format={(value) => emailValidate(value)}
            alertText="ایمیل را به درستی وارد کنید!"
            getValues={(val) => setEmailValue(val)}
            updateSteps={(update) => stepsHandler(1, update)}
            step={steps[0].step}
            submitForm={submitForm}
          />

          <CustomSelect
            label="اسم شهرت رو انتخاب کن"
            id="cities"
            name="Cities"
            alertText="هیچ شهری انتخاب نشده"
            getValue={(val) => setCityValue(val)}
            updateSteps={(update) => stepsHandler(2, update)}
            step={steps[1].step}
            submitForm={submitForm}
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
            updateSteps={(update) => stepsHandler(3, update)}
            step={steps[2].step}
            submitForm={submitForm}
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
            updateSteps={(update) => stepsHandler(4, update)}
            step={steps[3].step}
            submitForm={submitForm}
          />
          <CustomButton
            steps={steps.filter((item) => item.step === true).length}
          >
            <img src="./images/ArrowLeft.png" alt="Arrow-left" />
          </CustomButton>
        </form>
      </div>
    </section>
  );
};

export default Login;
