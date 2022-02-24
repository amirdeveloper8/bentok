import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import classes from "./dashboard.module.css";

const Dashboard = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const dispatch = useDispatch();

  return (
    <div className={classes.dashboard}>
      <p>ایمیل:{userDetails.email} </p>
      <p> شهر:{userDetails.city}</p>
      <p>استان:{userDetails.state} </p>
      <p>کدپستی:{userDetails.postalCode} </p>
      <button
        className={classes.logout}
        onClick={() => dispatch(authActions.logout())}
      >
        خروج
      </button>
    </div>
  );
};

export default Dashboard;
