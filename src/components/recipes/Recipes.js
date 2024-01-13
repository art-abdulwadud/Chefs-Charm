import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { atom, useAtom } from 'jotai';
import RecipeCard from './RecipeCard';
import { searchLoadingAtom, searchResultsAtom, searchingAtom } from '../layout';
import Tags from './recipeCard/tags/Tags';
import SearchResultsHeader from './SearchResultsHeader';
import PreLoader from './PreLoader';
import FetchMoreButton from './FetchMoreButton';
// import { dummyData } from './dummyData';

export const selectedRecipeAtom = atom(null);
export const selectedTagAtom = atom('brunch');
export const recipeCountAtom = atom(null);

const Recipes = () => {
  const [recipeCount, setRecipeCount] = useAtom(recipeCountAtom);
  const [selectedTag] = useAtom(selectedTagAtom);
  const [searching] = useAtom(searchingAtom);
  const [searchResults] = useAtom(searchResultsAtom);
  const [searchLoading] = useAtom(searchLoadingAtom);
  const [size, setSize] = useState(21);
  const { data, isLoading } = useQuery(['fetchRecipes', selectedTag, size], async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: `${size}`,
          ...selectedTag ? { tags: selectedTag } : {}
        },
        headers: {
          'X-RapidAPI-Key': process.env.GATSBY_API_KEY,
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };
      const response = await axios.request(options);
      setRecipeCount(response.data?.count || 800);
      return response.data?.results;
      // return dummyData; This is for Testing only
    } catch (error) {
      console.log(error.message);
      return [];
    }
  });
  return (
    <>
      <Tags />
      {searching && !searchLoading ? <SearchResultsHeader /> : null}
      <div className="relative z-10 flex center gap-5 wrap pb-2 pt-3 mx-2 overflow-hidden">
        {isLoading ? (
          <PreLoader />
        ) : (
          <>
            {searching ? (
              <>
                {searchLoading ? null : (
                  <>
                    {searchResults?.map((key, index) => (
                      <RecipeCard key={key.id} recipe={key} index={index} />
                    ))}
                  </>
                )}
                {!searchLoading && searchResults?.length < 1 ? (
                  <p>No results found</p>
                ) : null}
              </>
            ) : (
              <>
                {data?.map((key, index) => (
                  <RecipeCard key={key.id} recipe={key} index={index} />
                ))}
              </>
            )}
          </>
        )}
      </div>
      {console.log(isLoading, recipeCount, searching)}
      {!isLoading && recipeCount && !searching ? (
        <FetchMoreButton data={data} recipeCount={recipeCount} setSize={setSize} size={size} />
      ) : null}
    </>
  );
};

export default Recipes;
