import styles from './NewUser.module.css'
const NewUser = ({newUser}) => {
  return (
      <div className={styles.new}>
          <p>User {newUser} joined</p>
      </div>
  );
}
export default NewUser;
