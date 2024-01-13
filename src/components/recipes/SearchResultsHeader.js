import { useAtom } from 'jotai';
import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { searchResultsAtom } from '../layout';

const SearchResultsHeader = () => {
  const [searchResults] = useAtom(searchResultsAtom);
  return (
    <div className="relative z-10 flex center flex-col pb-2 pt-3 mx-2 overflow-hidden animate__animated animate__fadeIn">
      <div className="flex center flex-col bg-amber-400 dark:text-gray-800 text-white p-2">
        <span className="text-2xl font-bold">
          Found {searchResults?.length} Recipe{searchResults?.length === 1 ? '' : 's'}
        </span>
        <button
          type="button"
          className="dark:bg-gray-800 bg-white text-amber-400 flex items-center text-sm font-bold gap-1
          px-3 py-1 mt-2"
        >
          Clear Filter
          <FaRegTimesCircle />
        </button>
      </div>
    </div>
  );
};

export default SearchResultsHeader;
