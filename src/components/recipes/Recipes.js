import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { atom, useAtom } from 'jotai';
import BarLoader from 'react-spinners/BarLoader';
import RecipeCard from './RecipeCard';
import { darkModeAtom } from '../layout';
import Tags from './recipeCard/tags/Tags';
// import { dummyData } from './dummyData';

export const selectedRecipeAtom = atom(null);
export const selectedTagAtom = atom('brunch');

const Recipes = () => {
  const [darkMode] = useAtom(darkModeAtom);
  const [selectedTag] = useAtom(selectedTagAtom);
  const { data, isLoading } = useQuery(['fetchUsers', selectedTag], async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: '21',
          ...selectedTag ? { tags: selectedTag } : {}
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
  return (
    <>
      <Tags />
      <div className="relative z-10 flex center gap-5 wrap pb-10 pt-3 mx-2">
        {isLoading ? (
          <div className="relative flex center flex-col" style={{ minHeight: '50vh' }}>
            <img
              src="/logo-tp.png"
              alt="logo"
              style={{ height: '200px',
                width: '200px',
                animationIterationCount: 'infinite',
                animationDirection: 'alternate' }}
              className="relative mb-2 animate__animated animate__bounce animate__slower"
            />
            <BarLoader
              className="animate__animated animate__fadeIn"
              cssOverride={{
                width: '200px',
                backgroundColor: '#Fbbf24',
                borderRadius: '10px'
              }}
              color={darkMode ? '#374151' : '#f9fafb'}
            />
            <span
              className="text-amber-400 animate__animated animate__flash animate__slower"
              style={{
                animationIterationCount: 'infinite',
                animationDirection: 'alternate'
              }}
            >
              Just a sec 😋
            </span>
          </div>
        ) : (
          <>
            {data?.map((key, index) => (
              <RecipeCard key={key.id} recipe={key} index={index} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Recipes;
