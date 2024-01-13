import { useAtom } from 'jotai';
import React from 'react';
import { searchResultsAtom } from '../layout';

const SearchResultsHeader = () => {
  const [searchResults] = useAtom(searchResultsAtom);
  return (
    <div className="relative z-10 flex center flex-col pb-2 pt-3 mx-2 overflow-hidden animate__animated animate__fadeIn">
      <h1 className="text-2xl font-bold bg-amber-400 dark:text-gray-800 text-white p-2">
        Found {searchResults?.length} Recipe{searchResults?.length === 1 ? '' : 's'}
      </h1>
    </div>
  );
};

export default SearchResultsHeader;
