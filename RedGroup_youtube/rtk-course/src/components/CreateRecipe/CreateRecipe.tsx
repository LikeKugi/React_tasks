import {JSX, useState} from "react";
import styles from './CreateRecipe.module.scss'

const CreateRecipe = (): JSX.Element => {
  const [] = useState();
  return (
    <form className={styles.form}>
      <label className={styles.form__label} htmlFor="recipeName">Name: </label>
      <input className={styles.form__input} type="text" id={'recipeName'} placeholder={'Name...'}/>
      <label className={styles.form__label} htmlFor="{'recipeImage'}">Image link: </label>
      <input className={styles.form__input} type="text" id={'recipeImage'} placeholder={'Image link'}/>
    </form>
  );
}
export default CreateRecipe;
