import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { atom } from 'jotai';
import RecipeCard from './RecipeCard';
// import { dummyData } from './dummyData';

export const selectedRecipeAtom = atom(null);

const Recipes = () => {
  const [loading, setLoading] = useState(true);
  const { data } = useQuery(['fetchUsers'], async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: '21',
          tags: 'under_30_minutes'
        },
        headers: {
          'X-RapidAPI-Key': process.env.GATSBY_API_KEY,
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };
      const response = await axios.request(options);
      return response.data?.results;
      // return dummyData;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  });
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <div className="relative z-10 flex center gap-5 wrap py-10 mx-2 overflow-hidden">
      {loading ? 'loading' : (
        <>
          {data?.map((key, index) => (
            <RecipeCard key={key.id} recipe={key} delay={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default Recipes;
