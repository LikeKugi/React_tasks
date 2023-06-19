import styles from './Modal.module.css'
import {useRef} from "react";


const Modal = ({closeModal, submitModal}) => {

  const inputNicknameRef = useRef();

  const connectionHandler = (e) => {
    e.preventDefault();
    if (inputNicknameRef.current && inputNicknameRef.current.value.trim().length > 0) {
      submitModal(inputNicknameRef.current.value.trim())
    }
    closeModal();
  }
  const closeHandler = (e) => {
    if (e.target.id === "backgroundModal") {
      closeModal();
    }
  }

  return (
      <div id="backgroundModal"
           className={styles.wrapper}
           onClick={closeHandler}>
        <div className={styles.modal}>
          <h2 className={styles.modal__title}>Enter your nickname</h2>
          <div className={styles.modal__field}>
            <label htmlFor="nickname">Your nickname: </label>
            <input ref={inputNicknameRef}
                   type="text"
                   id="nickname"/>
          </div>

          <div className={styles.modal__fieldBtn}>
            <button className={styles.modal__btn}
                    onClick={connectionHandler}>Enter
            </button>
          </div>
          <div className={styles.modal__fieldBtn}>
            <button className={styles.modal__btn} onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
  );
}
export default Modal;
