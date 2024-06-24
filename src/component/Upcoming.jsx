import React from 'react'
import { useNavigate } from 'react-router-dom';
import useMovieData from './customhook/useMovieData';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
`

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-content: flex-start;
  padding: 100px 10px;
  box-sizing: border-box;
  width: 70%;
`

const MovieCard = styled.div`
  position: relative;
  margin: 16px;
  color: white;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 12px;
  background-color: #383a69;

  > img{
    width: 100%;
    border-radius: 6px;
  }
`

const Upcoming = () => {
  
  const navigate = useNavigate();
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const movieData = useMovieData('https://api.themoviedb.org/3/movie/upcoming')
  const goDetailPage = (movie) => {
    navigate(`/movie/${movie.id}`, {
      state: movie
    })
  }

  return (
    <BodyContainer>
      <MovieContainer>
        {movieData && movieData.map(movie => (
          <MovieCard key={movie.id} title={movie.title} className='movie' >
            <img src={BASE_URL + movie.poster_path} onClick={()=>goDetailPage(movie)}/>
            <div className='movie-info'>
              <h3>{movie.title} </h3>
              <p>{movie.vote_average}</p>
            </div>
          </MovieCard>
        ))}
      </MovieContainer>
    </BodyContainer>
  )
}

export default Upcoming