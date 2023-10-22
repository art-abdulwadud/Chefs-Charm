import axios from 'axios';
import { atom, useAtom } from 'jotai';
import React, { useEffect } from 'react';
import RecipeCard from './RecipeCard';

export const recipesAtom = atom([]);

const Recipes = () => {
  const [recipes, setRecipes] = useAtom(recipesAtom);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://tasty.p.rapidapi.com/recipes/list',
          params: {
            from: '0',
            size: '20',
            tags: 'under_30_minutes'
          },
          headers: {
            'X-RapidAPI-Key': process.env.GATSBY_API_KEY,
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
          }
        };
        const response = await axios.request(options);
        setRecipes(response.data?.results);
      } catch (error) {
        console.log(error.message);
        setRecipes([]);
      }
    };
    fetchRecipes();
  }, []);
  return (
    <div>
      {recipes.map((key) => (
        <RecipeCard key={key.id} />
      ))}
    </div>
  );
};

export default Recipes;
