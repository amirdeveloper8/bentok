import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/auth/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  const authenticated = useSelector((state) => state.auth.authenticated);
  return (
    <div className="App">
      <div className="main">
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              {!authenticated ? <Login /> : <Redirect to="/dashboard" />}
            </Route>
            <Route path="/dashboard">
              {authenticated ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
            <Route path="/">
              {authenticated ? (
                <Redirect to="/dashboard" />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
