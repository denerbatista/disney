import React, { useState } from "react";
import Modal from "../modal";

function Card({ element }) {
  const [switchModal, setswitchModal] = useState(false);
  const handleSwitchModal = () => {
    setswitchModal(!switchModal);
  };
  return (
    <div >
      <img src={element.imageUrl} alt={`image ${element.name}`} />

      <h2>{element.name}</h2>

      <button onClick={handleSwitchModal()}>Detalhes</button>
      {switchModal && <Modal element={element} />}
    </div>
  );
}

export default Card;
