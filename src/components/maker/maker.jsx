import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const historyState = useHistory().state;
  //성능을 위해 오브젝트로 관리
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();

  //로그 아웃 함수
  //함수가 계속 호출되어도 동일한 데이터를 사용하기 위해 훅 사용
  //but, authService가 바뀌면 다시 데이터를 전달 받음
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  //realtime database
  //mount가 되었을때, 사용자 아이디가 변경되었을때 사용
  useEffect(() => {
    if (!userId) {
      return;
    } //stopSync는 ref값만을 가지고 있음, 콜백 리턴값(ref.off()) unmount시 호출해줘야 함
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => {
      stopSync();
    };
  }, [userId, cardRepository]);

  //로그 아웃이 되어 유저 정보가 없어진다면 메인화면으로 보낸다
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history]);

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
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
