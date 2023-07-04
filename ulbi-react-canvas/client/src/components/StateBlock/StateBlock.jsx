import styles from './StateBlock.module.css'
import usersState from "../../store/usersState";

const StateBlock = ({openModal}) => {

  const clickHandler = (e) => {
    openModal()
  }

  return (
      <aside className={styles.state}>
          <button className={styles.state__btn} onClick={clickHandler}>Login
          </button>
        <div>
          <h3 className={styles.state__title}>{usersState.userName}</h3>
        </div>

      </aside>
  );
}
export default StateBlock;
