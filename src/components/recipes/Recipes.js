import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { atom, useAtom } from 'jotai';
import RecipeCard from './RecipeCard';
import { searchLoadingAtom, searchResultsAtom, searchingAtom } from '../layout';
import Tags from './recipeCard/tags/Tags';
import SearchResultsHeader from './SearchResultsHeader';
import PreLoader from './PreLoader';
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
  const { data, isLoading } = useQuery(['fetchRecipes', selectedTag], async () => {
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
      setRecipeCount(response.data?.count || null);
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
      {!isLoading && recipeCount && !searching ? (
        <div className="relative z-20 py-3 flex center">
          <button
            type="button"
            className={`flex flex-col center
        border-none py-2 px-4 rounded-2xl bg-amber-400 text-gray-800
        `}
          >
            <span className="text-xs">{data?.length} / {recipeCount}</span>
            <span className="text-lg">Show More</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Recipes;
