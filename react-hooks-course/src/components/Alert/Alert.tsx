import {FC, JSX} from "react";
import styles from './Alert.module.css'


interface IAlert {
  toggle?: () => void,
}


const Alert: FC<IAlert> = ({toggle}): JSX.Element => {
  return (
    <div className={styles.alert} onClick={() => toggle ? toggle() : null}>
      <p className={styles.alert__message}>The really important message</p>
    </div>
  )
}
export default Alert;
