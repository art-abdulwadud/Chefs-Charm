import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { atom, useAtom } from 'jotai';
import BarLoader from 'react-spinners/BarLoader';
import RecipeCard from './RecipeCard';
import { darkModeAtom } from '../layout';
// import { dummyData } from './dummyData';

export const selectedRecipeAtom = atom(null);

const Recipes = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode] = useAtom(darkModeAtom);
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
      {loading ? (
        <div className="relative">
          <BarLoader
            cssOverride={{
              height: '120px',
              width: '110px',
              backgroundColor: '#Fbbf24',
              borderRadius: '10px'
            }}
            color={darkMode ? '#374151' : '#f9fafb'}
          />
          <img src="/favicon.png" alt="logo" style={{ height: '90px', width: '90px' }} className="absolute top-2 left-2" />
          <span className="text-white dark:text-gray-700 absolute top-24 left-3">Just a sec 😋</span>
        </div>
      ) : (
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
