import React, { useState } from 'react';
import { FaArrowsSpin } from 'react-icons/fa6';
import { useAtom } from 'jotai';
import axios from 'axios';
import { searchResultsAtom, searchingAtom } from '../layout';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [, setSearching] = useAtom(searchingAtom);
  const [, setSearchResults] = useAtom(searchResultsAtom);
  const [isLoading, setIsLoading] = useState(false);
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
        console.log(response.data?.results, searchKeyword);
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
  return (
    <>
      {isLoading
        ? (
          <span className="absolute top-0 right-2 z-50 h-[38px] flex items-center text-xl pt-2">
            <FaArrowsSpin className="animate-spin text-gray-500" />
          </span>
        )
        : null}
      <form className="relative w-[100%]" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-[100%] rounded-full h-[38px] px-3 outline-none relative"
          placeholder="Search Recipe e.g Cookies Recipe"
          onChange={(e) => e.target.value.length > 3 ? setSearchKeyword(e.target.value) : null}
        />
      </form>
    </>
  );
};

export default SearchBar;
