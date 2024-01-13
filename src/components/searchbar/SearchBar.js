/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { FaArrowsSpin } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { useAtom } from 'jotai';
import axios from 'axios';
import { searchLoadingAtom, searchResultsAtom, searchingAtom } from '../layout';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searching, setSearching] = useAtom(searchingAtom);
  const [, setSearchResults] = useAtom(searchResultsAtom);
  const [isLoading, setIsLoading] = useAtom(searchLoadingAtom);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (searchKeyword.length < 3) {
        setSearching(false);
      } else {
        setSearching(true);
        const options = {
          method: 'GET',
          url: 'https://tasty.p.rapidapi.com/recipes/list',
          params: {
            from: '0',
            size: '21',
            q: searchKeyword
          },
          headers: {
            'X-RapidAPI-Key': process.env.GATSBY_API_KEY,
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
          }
        };
        const response = await axios.request(options);
        setSearchResults(response.data?.results || null);
        setIsLoading(false);
        return response.data?.results;
      }
      setIsLoading(false);
      return [];
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      return [];
    }
  };
  useEffect(() => {
    if (!searching) setSearchKeyword('');
  }, [searching]);
  return (
    <form className="relative w-[100%]" onSubmit={handleSubmit}>
      {isLoading
        ? (
          <span className="absolute top-0 right-2 z-50 h-[38px] flex items-center text-xl">
            <FaArrowsSpin className="animate-spin text-gray-500" />
          </span>
        )
        : (
          <button
            type="submit"
            className="absolute top-0 right-2 z-50 h-[38px] flex items-center text-xl"
          >
            <FaSearch className="text-gray-700" />
          </button>
        )}

      <input
        type="text"
        className="w-[100%] rounded-full h-[38px] px-3 outline-none relative pr-8"
        placeholder="Search Recipe e.g Cookies Recipe"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
