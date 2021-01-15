import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  //성능을 위해 오브젝트로 관리
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Dori",
      company: "Apple",
      theme: "dark",
      title: "front-end",
      email: "Dori@gamil.com",
      message: "I like React JS",
      fileName: "Dori",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Jiny",
      company: "Samsung",
      theme: "light",
      title: "full-stack",
      email: "Jiny@gamil.com",
      message: "I love Programing",
      fileName: "Jiny",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "Goorm",
      company: "Google",
      theme: "colorful",
      title: "software engineer",
      email: "Goorm@gamil.com",
      message: "I like sky, look at this",
      fileName: "Goorm",
      fileURL: null,
    },
  });
  const history = useHistory();

  //로그 아웃 함수
  const onLogout = () => {
    authService.logout();
  };

  //로그 아웃이 되어 유저 정보가 없어진다면 메인화면으로 보낸다
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
