import React from 'react'
import { useNavigate } from 'react-router-dom';
import useMovieData from './customhook/useMovieData';

const Upcoming = () => {
  
  const navigate = useNavigate();
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const movieData = useMovieData('https://api.themoviedb.org/3/movie/upcoming')
  const goDetailPage = (movie) => {
    navigate(`/detail/${movie.title}`, {
      state: movie
    })
  }

  return (
    <div className='movie-container'>
      {movieData && movieData.map(movie => (
        <div key={movie.id} className='movie'>
          <img src={BASE_URL + movie.poster_path} alt={movie.title} onClick={()=>goDetailPage(movie)}/>
          <div className='movie-info'>
            <h3>{movie.title}</h3>
            <p>{movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Upcoming