import styles from './Modal.module.css';

const Modal = (props) => {
  return (
      <div className={styles.modal}>
        <h2>{props.text}</h2>
        <div>
          <button onClick={props.onClose}>Cancel</button>
          <button onClick={props.onClose}>Yes</button>
        </div>
      </div>
  );
}
export default Modal;
