import React, { useEffect, useRef, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { imgBaseUrl, imgSize } from "../../../../variables";
import style from "./Modal.module.css";

export const Modal = ({ modalIsOpen, closeModal, src, index }) => {
  return (
    <div>
      {modalIsOpen && (
        <Lightbox
          mainSrc={imgBaseUrl + imgSize.w1280 + src}
          onCloseRequest={closeModal}
          wrapperClassName={style.overlay}
          imagePadding={30}
        ></Lightbox>
      )}
    </div>
  );
};
