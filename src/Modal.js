import React, { useState } from "react";

const JanelaModal = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <div>
        <p>Esse é um modal!</p>
        <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );

  return null;
};

const Modal = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <JanelaModal modal={modal} setModal={setModal} />
      <button onClick={() => setModal(true)}>Abrir</button>
    </>
  );
};

export default Modal;
