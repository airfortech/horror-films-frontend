import React from "react";
import { default as ReactModal } from "react-modal";
import { imgBaseUrl, imgSize } from "../../../../variables";
import style from "./Modal.module.css";

ReactModal.setAppElement("#root");

export const Modal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  src,
  index,
}) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      {/* <button onClick={closeModal}>close</button> */}
      <img
        src={imgBaseUrl + imgSize.w342 + src}
        alt={"Picture number " + index}
      />
    </ReactModal>
  );
};
