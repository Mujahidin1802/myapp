import React from "react";
import "../styles/login.css";
import { Button, Header, Input } from "../components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  document.title = "Login";

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [savedUser, setSavedUser] = React.useState({});

  const history = useHistory();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log(user);
      setSavedUser(user);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (savedUser?.email === email && savedUser?.password === password) {
      console.log("Login Success");
      history.replace("/dashboard");
    } else {
      alert("email atau password salah");
    }
  };

  return (
    <div>
      <Header />
      <div className="login">
        <form onSubmit={onSubmit}>
          <Input
            label="Email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Login" onClick={onSubmit} type="submit" />
          <p>
            <Link to="../Register" className="nothaveaccount">
              Don't have an account yet?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
