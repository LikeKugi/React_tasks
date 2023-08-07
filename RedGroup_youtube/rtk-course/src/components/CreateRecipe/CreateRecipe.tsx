import {ChangeEvent, FormEvent, JSX, useState} from "react";
import styles from './CreateRecipe.module.scss'
import {useCreateRecipeMutation} from "../../store/api/recipe.api";

interface IRecipeForm {
  recipeName: string,
  recipeImage: string,
}

const initialFormState: IRecipeForm = {
  recipeImage: '',
  recipeName: '',
}

const CreateRecipe = (): JSX.Element => {
  const [recipe, setRecipe] = useState<IRecipeForm>(initialFormState);

  const [createRecipe] = useCreateRecipeMutation()

  const changeInputHandler = (e: ChangeEvent) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLInputElement)) return;
    const {name, value} = e.target;
    setRecipe((prevState) => ({
      ...prevState,
      [name]: value ? value : '',
    }))
  }

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(recipe);
    createRecipe({
      name: recipe.recipeName.trim(),
      image: recipe.recipeImage.trim() ? recipe.recipeImage.trim() : undefined,
    }).then(() => {
      setRecipe(initialFormState);
    });
  }

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <h3>Create a new Recipe: </h3>
      <label className={styles.form__label}
             htmlFor="recipeName">Name: </label>
      <input className={styles.form__input}
             name={'recipeName'}
             type="text"
             id={'recipeName'}
             placeholder={'Name...'}
             onChange={changeInputHandler}
             value={recipe.recipeName}/>
      <label className={styles.form__label}
             htmlFor={'recipeImage'}>Image link: </label>
      <input className={styles.form__input}
             name={'recipeImage'}
             type="text"
             id={'recipeImage'}
             placeholder={'Image link'}
             onChange={changeInputHandler}
             value={recipe.recipeImage}/>
      <button type={"submit"}>Submit</button>
    </form>
  );
}
export default CreateRecipe;
