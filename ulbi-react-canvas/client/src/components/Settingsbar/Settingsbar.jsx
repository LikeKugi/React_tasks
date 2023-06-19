import styles from './Settingsbar.module.css';
import toolState from "../../store/toolState";

const Settingsbar = (props) => {
  return (
      <div className={styles.settingsbar}>
        <label htmlFor="lineWidth">Width of the line: </label>
        <input type="number"
               onChange={e => toolState.setLineWidth(e.target.value)}
               defaultValue={1}
               min={1}
               max={50}
               id="lineWidth"/>
      </div>
  );
}
export default Settingsbar;
