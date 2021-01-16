import { firebaseDatabase } from "./firebase";

class CardRepository {
  //사용자 계정에 대한 realtime database 구축
  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards/`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
