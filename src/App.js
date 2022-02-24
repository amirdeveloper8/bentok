import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomButton from "./components/UI/CustomButton";

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
      </div>
    </div>
  );
}

export default App;
