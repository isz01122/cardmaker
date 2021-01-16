import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";
import { useHistory } from "react-router-dom";

const Login = ({ authService }) => {
  const history = useHistory();

  //maker 화면으로 이동하기 위한 함수
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };

  //로그인 버튼을 누르면 데이터를 콜백으로 전달해준다
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  //유저 정보가 이미 있다면 바로 maker창으로 보낸다
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.id);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
