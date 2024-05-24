import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.css';

//평점 {state.vote_average}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const VoteStar = styled.h3`
  display: grid;
  grid-template-columns: repeat(10 ,20px);
`

const Detailpage = () => {

  const { state } = useLocation();
  console.log(state)
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  
  return (
    <div className='movie-area'>
      <img className='movie-img' src={BASE_URL + state.poster_path}/>
      <div className='movie-details'>
        <h2 className='movie-title'>{state.title}</h2>
        <div className='vote'>
          <h3 className='vote-title'>평점</h3>
          <VoteStar>
          {[...Array(parseInt(Math.floor(state.vote_average)))].map((n, index) => {
            return(<div key={index}>⭐</div>)
          })}
          </VoteStar>
        </div>
        <h3 className='movie-date'>개봉일 {state.release_date}</h3>
        <h3>줄거리</h3>
        <p className='movie-overview'>{state.overview ? state.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</p>
      </div>
    </div>
  )
}

export default Detailpage