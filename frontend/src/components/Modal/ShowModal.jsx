import { useEffect } from "react";

const MyModal = ({ closeModal }) => {
  useEffect(() => {
    return () => window.location.reload();
  }, []);
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>Welcome </h2>
        <p>
          Hey there! Thanks for joining. We’re thrilled to have you. Get ready
          for some amazing deals and updates right here. 😊
        </p>
        <button className="model-btn" onClick={closeModal}>
          Thanyou for Registration
        </button>
      </div>
    </>
  );
};

export default MyModal;
