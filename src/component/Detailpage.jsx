import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useMovieData from './customhook/useMovieData';
import Loading from './customhook/Loading';

const VoteStar = styled.h3`
  display: grid;
  grid-template-columns: repeat(10 ,20px);
`

const MovieContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 84vh;
  justify-content: center;
  align-items: center;
`

const MovieImg = styled.img`
  height: 500px;
  margin-right: 80px;
`

const MovieDetails = styled.div`
  color: white;
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Credits = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding-bottom: 6vh;
  justify-content: center;
`

const ProfileContainer = styled.div`
  width: 160px;
  height: 160px;
  padding: 20px;
  text-align: center;
  color: white;
`

const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 50%;
  margin-bottom: 10px;
`

const Name = styled.h5`
  
`

const Detailpage = () => {

  const { id } = useParams();
  const { movieData, loading } = useMovieData('https://api.themoviedb.org/3/movie', id);
  const { movieData: movieData1, loading: loading1 }= useMovieData(`https://api.themoviedb.org/3/movie/${id}/credits`);
  console.log(movieData1)
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const BASE_PROFILE_URL ="https://image.tmdb.org/t/p/w200/"
  const NO_IMAGE_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";
  
  if (loading || loading1) {
    return (
      <Loading/>
    )
  }

  if (!movieData) {
    return <div>No Moives</div>
  }

  return (
    <MovieContainer>
      <DetailContainer>
        <MovieImg src={BASE_URL + movieData.poster_path}/>
        <MovieDetails>
          <h2>{movieData.title}</h2>
          <Vote>
            <h4 className='vote-title'>평점</h4>
            <VoteStar>
            {[...Array(parseInt(Math.floor(movieData.vote_average)))].map((n, index) => {
              return(<div key={index}>⭐</div>)
            })}
            </VoteStar>
          </Vote>
          <h3 className='movie-date'>개봉일 {movieData.release_date}</h3>
          <h3>줄거리</h3>
          <p className='movie-overview'>{movieData.overview ? movieData.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</p>
        </MovieDetails>
      </DetailContainer>
      <Credits>
        {movieData1.cast.map((people) => (
          <ProfileContainer key={people.id}>
            {
              people.profile_path ? <Profile src = {BASE_PROFILE_URL + people.profile_path}/> : <Profile src = {NO_IMAGE_URL}/>
            }
            <Name>{people.name}</Name>
          </ProfileContainer>
        ))}
      </Credits>
    </MovieContainer>
  )
}

export default Detailpage