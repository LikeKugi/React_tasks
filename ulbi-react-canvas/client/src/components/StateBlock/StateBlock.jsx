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
          <h3 className={styles.state__title}>Users</h3>
          <ul className={styles.state__list}>
            {usersState.users.map(user => <li className={styles.state__item}>{user.username}</li>)}
          </ul>
        </div>

      </aside>
  );
}
export default StateBlock;
