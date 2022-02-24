import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/auth/login/Login";

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>bentok</h1>
        <Login />
      </div>
    </div>
  );
}

export default App;
