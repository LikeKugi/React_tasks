import React from 'react';
import './App.css';
import RecipeItem from "./components/RecipeItem/RecipeItem";
import Header from "./components/Header/Header";
import {useGetRecipesQuery} from "./store/api/api";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";

function App() {
  const {isLoading, data} = useGetRecipesQuery();

  return (
    <div className="App">
      <Header />
      <CreateRecipe />
      {isLoading ? (<p>Loading...</p>) : data?.map(recipe => <RecipeItem recipe={recipe} />)}
    </div>
  );
}

export default App;
