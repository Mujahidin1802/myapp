import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/dashboard.css";
import { Button, Header } from "../components";

const Home = () => {
  document.title = "Dashboard";
  const [user, setUser] = React.useState({});

  const history = useHistory();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
      localStorage.setItem("isLogin", JSON.stringify(true));
    } else {
      history.push("/login");
    }
  }, []);

  const onLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <>
      <Header />
      <div className="dashboard" style={{ padding: 16 }}>
        <h1>Halo {user?.name}</h1>
        <hr />
        <p>
          <b>Routing</b> atau dalam bahasa Indonesianya adalah <i>Perutean </i>
          merupakan satu hal yang sangat penting pada hampir setiap arsitektur
          aplikasi. Semakin besar suatu aplikasi, semakin kompleks pula
          fungsionalitas Peruteannya (Routingnya), dari Perutean yang sederhana
          hingga skenario Perutean (Routing) yang bercabang.
          <br />
          <br /> <b>React Router</b> adalah library yang paling populer dan yang
          paling umum digunakan untuk melakukan Routing pada aplikasi React.
          Seiring pertumbuhan suatu aplikasi yang membutuhkan beberapa tampilan
          (view) dan rute (route), maka idealnya untuk memilih <i>Router </i>
          yang bagus untuk membantu mengatur transisi atau perpindahan antara
          tampilan, redirect, mendapatkan paramaeter URL dengan mudah dll.
          <br />
          <br />
          Pada dasarnya, <b>react-router-dom </b>mempunyai 2 jenis router yang
          dapat kita gunakan, yaitu <b>HashRouter </b>dan <b>BrowserRouter</b>.
          Keduanya mempunyai kegunaan masing-masing tergantung dari jenis Web
          apa yang akan kita buat. Seperti contoh, jika kita ingin membuat
          sebuah web yang static atau tidak ada server untuk me-render data yang
          dinamis, maka sebaiknya kita menggunakan HashRouter. Sebaliknya, jika
          kita membuat web yang menggunakan data dinamis dengan server backend,
          maka menggunakan BrowserRouter adalah pilihan yang tepat.
        </p>
        <Button title="Log Out" onClick={onLogout} />
      </div>
    </>
  );
};

export default Home;
