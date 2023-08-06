import React from 'react';
import './App.css';
import RecipeItem from "./components/RecipeItem/RecipeItem";
import Header from "./components/Header/Header";
import {useGetRecipesQuery} from "./store/api/api";

function App() {
  const {isLoading, data} = useGetRecipesQuery();

  return (
    <div className="App">
      <Header />
      {isLoading ? (<p>Loading...</p>) : data?.map(recipe => <RecipeItem recipe={recipe} />)}
    </div>
  );
}

export default App;
