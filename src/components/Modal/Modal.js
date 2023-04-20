import css from './Modal.module.css';

const Modal = ({ image }) => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
};

export default Modal;
