import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'

//Components
import MovieListItem from '../../components/MovieListItem/MovieListItem';

//Style
import StyledSearch from './StyledSearch';
import { ApiContext } from '../../context/ApiContextProvider';

function Search() {

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const {makeSearch} = useContext(ApiContext);


  async function handleSearch(event : React.FormEvent<HTMLFormElement>) : Promise<void> {
    event.preventDefault();
    setSearchResult(await makeSearch(search));
    console.log(searchResult)
  }


  return (
    <StyledSearch>
      <form onSubmit={event => handleSearch(event)}>
        <input type='text' onChange={(event) => setSearch(event.target.value)} />
        <button type='submit'>Search</button>
      </form>
      {!searchResult ? <></> : 
      <section className='search_result'>
        {console.log(searchResult)}
        {searchResult.movie.map((result, index) => {
          return (
            <MovieListItem key={index} movie={result} />
          );
        })}
      </section>
      }
    </StyledSearch>
  )
}

export default Search
