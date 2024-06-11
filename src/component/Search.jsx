import React from 'react'
import useMovieData from './customhook/useMovieData'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
import useDebounce from './customhook/useDebounce';

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  min-height: 80vh;
  width: 100%;
  color: white;

`

const InputSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  span {
    display: flex;
    align-items: center;
    margin-left: 6px;
  }
`

const NewInput = styled.input`
  height: 20px;
  padding-left: 5px;
`

const SearchMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 80px;
  width: 80%;
  padding: 20px;
  height: 60vh;
  overflow-y: scroll;
  background-color: #171B39;
`

const MovieCard = styled.div`
  margin: 10px;
  padding: 10px;
  width: calc(25% - 20px);
  text-align: center;
  color: white;
  background-color: #29286B;
  box-sizing: border-box;
  font-size: x-small;
  border-radius: 6px;


  img {
    border-radius: 6px;
    width: 100%;
    margin-bottom: 6px;
  }
  
`

const Search = () => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('');
  const movieData = useMovieData(url);
  const debouncedQuery = useDebounce(query, 500);

  const BASE_URL = "https://image.tmdb.org/t/p/w500/";

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if(debouncedQuery){
      const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${query}`;
      setUrl(searchUrl);
    }
  }, [debouncedQuery]);

  return (
    <SearchSection>
      <h1>Search your Movies!</h1>
      <InputSection>
        <NewInput
          className='search'
          value={query}
          onChange={handleSearch}
          placeholder='영화를 검색하세요...'
        />
        <span>
          <CiSearch color='white'/>
        </span>
      </InputSection>
      
      {movieData && movieData.length > 0 && (
        <SearchMovie>
          {movieData.map((movie) => (
            <MovieCard key={movie.id}>
              <img src={BASE_URL + movie.poster_path}/>
              <h2>{movie.title}</h2>
            </MovieCard>
          ))}
        </SearchMovie>
      )}
    </SearchSection>
  );
};

export default Search