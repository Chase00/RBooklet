import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Recipe from "./Recipe";
import 'fontsource-roboto';
import './App.css';

const App = () => {

  const APP_ID = process.env.REACT_APP_ID
  const APP_KEY = process.env.REACT_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
   getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits)
      setSearch("")
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white'
  };


  return (
    <div>
      <Card>
      <CardContent>
      <Typography variant="h2" className="header" gutterBottom>Recipe Booklet</Typography>
      <Typography variant="subtitle1" gutterBottom>Enter a food or meal type to get results for different recipes</Typography>
  
        <form onSubmit={getSearch} className="search-form">

          <TextField 
            id="standard-required"
            label="Food"
            type="text"
            value={search}
            onChange={updateSearch}
            required 
          />
          <br />
          <br />

          <Button style={style} variant="contained" type="submit">Get Recipes</Button>
        </form>
        </CardContent>
        </Card>

        <br />
        
        {recipes.map(r => (
          <Recipe 
            title={r.recipe.label}
            calories={r.recipe.calories} 
            image={r.recipe.image}
            key={`${r.recipe.label} recipe`}
            ingredients={r.recipe.ingredients}
            />
        ))}
        <br />
        <br />
    </div>
  );
}

export default App;
