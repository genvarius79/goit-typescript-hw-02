import React from "react";
import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

interface Props {
  modal: boolean;
  onClose: () => void;
  url: string;
  alt: string;
  author: string;
  likes: number;
}

const ImageModal: React.FC<Props> = ({
  modal,
  onClose,
  url,
  alt,
  author,
  likes,
}) => {
  return (
    <div>
      <ReactModal
        isOpen={modal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={onClose}
        overlayClassName={css.overlay}
        className={css.modal}
      >
        <img className={css.img} src={url} alt={alt} height={600} />

        <p className={css.title}>
          Descripsion: <span className={css.text}>{alt}</span>
        </p>
        <p className={css.title}>
          Author: <span className={css.text}>{author}</span>
        </p>
        <p className={css.title}>
          Likes: <span className={css.text}>{likes}</span>
        </p>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
