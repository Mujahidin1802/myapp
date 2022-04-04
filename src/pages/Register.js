import React from "react";
import { Header, Input, Button } from "../components";
import "../styles/register.css";
import { useHistory } from "react-router-dom";

const Register = () => {
  document.title = "Register";

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      const data = {
        name,
        email,
        password,
      };
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      history.push("/login");
    }
  };

  return (
    <div>
      <Header />
      <div className="login">
        <form onSubmit={onSubmit}>
          <Input
            label="Username"
            type="name"
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <Button title="Register" onClick={onSubmit} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;
