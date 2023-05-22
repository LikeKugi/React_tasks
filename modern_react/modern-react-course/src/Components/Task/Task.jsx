import {useState} from "react";
import styles from './Task.modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";

const Task = (props) => {
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
      <>
        <div className='task'>
          <h2 className='task__title'>{props.text}</h2>
          <div className="task__actions">
            <button className='task__btn'
                    onClick={showModalHandler}>Delete
            </button>
          </div>
          {showModal && <Backdrop onClick={closeModalHandler}/>}
          {showModal && <Modal text='Are you sure?'
                               onClose={closeModalHandler}/>}
        </div>
      </>
  );
}

export default Task;