import React, { useState } from "react";
import MyModal from "./ShowModal";
import "./Modal.css";

const Modal = () => {
  const [setshowModal, setSetshowModal] = useState(false);
  const closeModal = () => setSetshowModal(false);

  return (
    <>
      <button className="model-btn" onClick={() => setSetshowModal(true)}>
        Open Modal
      </button>
      {setshowModal && <MyModal closeModal={closeModal} />}
    </>
  );
};

export default Modal;
