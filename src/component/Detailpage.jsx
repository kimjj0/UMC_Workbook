import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const VoteStar = styled.h3`
  display: grid;
  grid-template-columns: repeat(10 ,20px);
`

const MovieContainer = styled.div`
  margin-top: 80px;
  position: absolute;
  display: flex;
  height: calc(100% - 130px);
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const MovieImg = styled.img`
  height: 500px;
  margin-right: 80px;
`

const MovieDetails = styled.div`
  color: white;
  width: 420px;
  > *{
    margin-bottom: 20px;
  }
`

const Vote = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  > h4{
    margin-right: 10px;
    white-space: nowrap;
  }
`


const Detailpage = () => {

  const { state } = useLocation();
  console.log(state)
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  
  return (
    <MovieContainer>
      <MovieImg src={BASE_URL + state.poster_path}/>
      <MovieDetails>
        <h2>{state.title}</h2>
        <Vote>
          <h4 className='vote-title'>평점</h4>
          <VoteStar>
          {[...Array(parseInt(Math.floor(state.vote_average)))].map((n, index) => {
            return(<div key={index}>⭐</div>)
          })}
          </VoteStar>
        </Vote>
        <h3 className='movie-date'>개봉일 {state.release_date}</h3>
        <h3>줄거리</h3>
        <p className='movie-overview'>{state.overview ? state.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</p>
      </MovieDetails>
    </MovieContainer>
  )
}

export default Detailpage