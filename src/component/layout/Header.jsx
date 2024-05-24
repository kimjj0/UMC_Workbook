import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  const eventHandler = (e) => {
    navigate(`/${e.target.className}`)
  }

  const goSignInPage = () => {

    if(document.getElementsByClassName('signin')[0].textContent == "로그인"){
      document.getElementsByClassName('signin')[0].textContent = '로그아웃'
    }else{
      document.getElementsByClassName('signin')[0].textContent = '로그인'
    }
    navigate('/signin');
  }

  return (

      <div className='header-container'>
        <div onClick={eventHandler}>UMC Movie</div>
        <div className='menu'>
          <div className='signin' onClick={goSignInPage}>로그인</div>
          <div className='popular' onClick={eventHandler}>Popular</div>
          <div className='toprated' onClick={eventHandler}>Top Rated</div>
          <div className='nowplaying' onClick={eventHandler}>Now Playing</div>
          <div className='upcoming' onClick={eventHandler}>Upcoming</div>
        </div>
      </div>

  )
}

export default Header