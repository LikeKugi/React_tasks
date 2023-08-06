import React from 'react';
import {IRecipe} from "../../types/receipe";
import styles from './RecipeItem.module.scss';
import {useActions} from "../../hooks/useActions";
import {useFavorites} from "../../hooks/useFavorites";

interface IRecipeItemProps {
  recipe: IRecipe;
}

const RecipeItem = ({recipe}: IRecipeItemProps) => {
  const {favorites} = useFavorites();
  const {toggleFavorites} = useActions();

  const clickHandle = () => {
    toggleFavorites(recipe);
    console.log(favorites);
  }

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      {recipe.image && <img src={recipe.image} alt={recipe.name} width={150}/>}
      <h2 className={styles.item__title}>{recipe.name}</h2>
      <button onClick={clickHandle}>{isExists ? 'Remove from Favorites' :'Add to Favorites'}</button>
    </div>
  );
};

export default RecipeItem;
