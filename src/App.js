import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
import Auth2 from "./components/Auth2";
import { Login } from "./components/Login.tsx";
import { Login2 } from "./components/Login2";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {/* {!isAuth && <Auth />}
      {isAuth && <UserProfile />} */}
      {/* <Auth2 /> */}
      {<Login />}
      {<Login2 />}
      <Counter />
    </Fragment>
  );
}

export default App;
