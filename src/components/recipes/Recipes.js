import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { atom } from 'jotai';
import RecipeCard from './RecipeCard';

export const selectedRecipeAtom = atom(null);

const Recipes = () => {
  const { data } = useQuery(['fetchUsers'], async () => {
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
      return response.data?.results;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  });
  return (
    <div>
      {data?.map((key) => (
        <RecipeCard key={key.id} recipe={key} />
      ))}
    </div>
  );
};

export default Recipes;
