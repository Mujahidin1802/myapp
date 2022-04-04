import React from "react";
import { useHistory } from "react-router-dom";

import { Header } from "../components";

const Home = () => {
  document.title = "Home";

  const history = useHistory();

  React.useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      history.push("/dashboard");
    }
  }, []);

  return (
    <>
      <Header isHome />
      <div style={{ padding: 16, fontSize: 18 }}>
        <p>
          Implementasi sederhana React Router Dom v5 &nbsp; | &nbsp; Mujahidin
        </p>
      </div>
    </>
  );
};

export default Home;
