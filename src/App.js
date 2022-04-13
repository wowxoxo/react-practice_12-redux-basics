import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
import Auth2 from "./components/Auth2";
import { Login } from "./components/Login";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {/* {!isAuth && <Auth />}
      {isAuth && <UserProfile />} */}
      {/* <Auth2 /> */}
      {<Login />}
      <Counter />
    </Fragment>
  );
}

export default App;
