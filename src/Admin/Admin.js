import { useState } from "react";
import { generalAPIcall } from "../utils/api";
import Error from "../Error/Error";
import Dashboard from "./Dashboard";
import Header from "../Header/Header"

export default function Admin() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [response, setResponse] = useState(false);
  const [adminError, setAdminError] = useState(null);
  
  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;

  const changeHandler = (event) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    audio.play();
    const controller = new AbortController();
    generalAPIcall("admin", loginInfo, "DELETE", controller.signal)
      .then((data) => setResponse(data.passwordFound))
      .catch(setAdminError);
    return () => controller.abort();
  };

  return (
    <>
    <Header />
    <div className="main">
      {!response ? (
        <div className="login">
          <Error error={adminError} />
          <h4 className="admin-header">Login.</h4>
          <h3 className="login-subheader">*Sorry but you'll have to relogin every time you want to enter this page.*</h3>
          <form className="login-form">
              <input
                name="username"
                type="text"
                value={loginInfo.username}
                placeholder="Username"
                onChange={changeHandler}
                className="input"
              />
              <input
                name="password"
                type="password"
                value={loginInfo.password}
                placeholder="Password"
                onChange={changeHandler}
                className="input"
              />
            <div className="button" onClick={submitHandler}>Submit</div>
          </form>
        </div>
      ) : <Dashboard admin={response}/>}
    </div>
    </>
  );
}
