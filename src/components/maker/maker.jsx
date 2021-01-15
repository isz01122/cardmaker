import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  //성능을 위해 오브젝트로 관리
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "dori1",
      company: "Samsung",
      theme: "dark",
      title: "software engineer",
      email: "dori1@gamil.com",
      message: "go for it",
      fileName: "dori1",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "dori2",
      company: "Samsung",
      theme: "light",
      title: "software engineer",
      email: "dori2@gamil.com",
      message: "go for it",
      fileName: "dori2",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "dori3",
      company: "Samsung",
      theme: "colorful",
      title: "software engineer",
      email: "dori3@gamil.com",
      message: "go for it",
      fileName: "dori3",
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
