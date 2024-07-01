
import React from 'react'
import useMovieData from './customhook/useMovieData';
import Loading from './customhook/Loading';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-content: flex-start;
  padding: 100px 10px;
  margin: 0 auto;
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

const PageArea = styled.div`
  display: flex;
  margin-bottom: 10vh;
  align-items: center;
  justify-content: center;
`

const Page = styled.div`
  color: white;
  margin: 0 10px;
  display: inline-block;
  width: 10px;
`

const Popular = () => {

  const navigate = useNavigate()
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const [page, setPage] = useState(1);
  const { movieData, loading } = useMovieData('https://api.themoviedb.org/3/movie/popular',null, page);

  const goDetailPage = (movie) => {
    navigate(`/movie/${movie.id}`, {
    })
  }

  const goNextPage = () => {
    setPage(page + 1);
  }

  const goPrevPage = () => {
    if(page > 1){
      setPage(page - 1);
    }
  }

  if (loading) {
    return (
      <Loading/>
    )
  }

  if(!movieData || !Array.isArray(movieData)){
    return <div>No Movies</div>
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
    <PageArea>
      <MdArrowBackIos 
        onClick={goPrevPage} 
        size={24} 
        color={page === 1 ? 'gray' : 'white'} 
        style={{ cursor: page === 1 ? 'not-allowed' : 'pointer'}}
      />
      <Page>{page}</Page>
      <MdArrowForwardIos 
        onClick={goNextPage} 
        size={24} 
        color='white' 
        style={{ cursor: 'pointer'}}
      />
    </PageArea>
  </BodyContainer>
  ) 
}

export default Popular
