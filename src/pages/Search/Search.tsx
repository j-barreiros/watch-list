import React, { useContext, useEffect, useState } from 'react';

//Components
import SearchBar from './components/SearchBar/SearchBar';
import SearchDisplay from './components/SearchDisplay/SearchDisplay';

//Style
import StyledSearch from './StyledSearch';
import { ApiContext } from '../../context/ApiContextProvider';
import SearchCategories from './components/SearchCategories/SearchCategories';

// Types
import { SearchResultKey, SearchResultType } from '../../interfaces';

function Search() {

  const [lastSearch, setLastSearch] = useState('');
  const [category, setCategory] = useState('movie');
  const resultKey = category as SearchResultKey;
  const context = useContext(ApiContext);
  const [searchResult, setSearchResult] = useState();

  async function handlePagination(newPage: number) {
    if (!searchResult) return;
    setSearchResult({ ...searchResult, [resultKey]: await context.getNewPage(category, newPage) })
    window.scrollTo(0, 0);
  }
  

 
  return (
    <StyledSearch className='container'>
      <SearchBar setSearchResult={setSearchResult} setLastSearch={setLastSearch} />
      <SearchCategories
        movieTotal={searchResult ? searchResult.movie.total_results : 0}
        tvTotal={searchResult ? searchResult.tv.total_results : 0}
        personTotal={searchResult ? searchResult.person.total_results : 0}
        setCategory={setCategory}
      />
      <SearchDisplay content={searchResult} category={category} handlePagination={handlePagination} />
    </StyledSearch>
  )
}

export default Search
