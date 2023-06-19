import styles from './ToolButton.css'

const ToolButton = ({clickHandler, children, disabledFlag}) => {
  return (
      <button onClick={clickHandler} className={`${styles.btn}`} >
        {children}
      </button>
  );
}
export default ToolButton;
