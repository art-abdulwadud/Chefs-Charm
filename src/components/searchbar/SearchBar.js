import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import axios from 'axios';
import { searchResultsAtom, searchingAtom } from '../layout';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [, setSearching] = useAtom(searchingAtom);
  const [, setSearchResults] = useAtom(searchResultsAtom);
  const { isLoading } = useQuery(['fetchUsers', searchKeyword], async () => {
    try {
      if (searchKeyword.length < 3) {
        setSearching(false);
      } else {
        setSearching(true);
        const options = {
          method: 'GET',
          url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
          params: {
            prefix: 'chicken soup'
          },
          headers: {
            'X-RapidAPI-Key': process.env.GATSBY_API_KEY,
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
          }
        };
        const response = await axios.request(options);
        setSearchResults(response.data?.results || null);
        return response.data?.results;
      }
      return [];
    } catch (error) {
      console.log(error.message);
      return [];
    }
  });
  return (
    <>
      {isLoading ? <span className="absolute top-0 right-0 z-50">Loading</span> : null}
      <input
        type="text"
        className="w-[100%] rounded-full h-[38px] px-3 outline-none relative"
        placeholder="Search"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
