import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions, authActionsTypes } from "../store/auth/authReducer";

const Header = () => {
  const dispatch = useDispatch();
  const isAUTOHRIZED = useSelector((state) => state.auth.isAUTOHRIZED);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAUTOHRIZED && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
