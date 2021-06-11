import { useState } from "react";
import { generalAPIcall } from "../utils/api";
import Error from "../Error/Error";
import Dashboard from "./Dashboard";

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
    <div className="">
      {!response ? (
        <div className="">
          <Error error={adminError} />
          <h4 className="">Login.</h4>
          <h3>*Sorry but you'll have to relogin every time you want to enter this page.*</h3>
          <form onSubmit={submitHandler} className="">
              <input
                name="username"
                type="text"
                value={loginInfo.username}
                placeholder="Username"
                onChange={changeHandler}
                className=""
              />
              <input
                name="password"
                type="password"
                value={loginInfo.password}
                placeholder="Password"
                onChange={changeHandler}
                className=""
              />
            <input type="submit" value="Submit" className="" />
          </form>
        </div>
      ) : <Dashboard admin={response}/>}
    </div>
  );
}
