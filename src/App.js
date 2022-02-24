import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomButton from "./components/UI/Button/CustomButton";
import CustomInput from "./components/UI/Input/CustomInput";

function App() {
  return (
    <div className="App">
      <h1>bentok</h1>
      <div className="main">
        <CustomButton steps={0} />
        <CustomButton steps={25} />
        <CustomButton steps={50} />
        <CustomButton steps={70} />
        <CustomButton steps={100} />
        <CustomInput
          type="text"
          placeholder="آدرس ایمیلت رو اینجا بنویس"
          label="آدرس ایمیل"
          id="testText"
          name="test"
          format={(value) => value.trim().length > 0}
          alertText="ایمیل را به درستی وارد کنید!"
        />
      </div>
    </div>
  );
}

export default App;
