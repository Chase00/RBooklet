import React, {useState, useEffect} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {

  const APP_ID = process.env.REACT_APP_ID
  const APP_KEY = process.env.REACT_APP_KEY;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
   getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await
      fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);

      const data = await response.json();
      setRecipes(data.hits);
  }

  return (
    <div>
      <h1>Recipe Booklet</h1>
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">Submit</button>
        </form>
        {recipes.map(r => (
          <Recipe 
            title={r.recipe.label}
            calories={r.recipe.calories} 
            image={r.recipe.image}
            key={`${r.recipe.label} recipe`}
            />
        ))}
    </div>
  );
}

export default App;
