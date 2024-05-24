import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.css';

const NotFoundPage = () => {
    console.log('asdfasdfdsfasdf')
    const navigate = useNavigate();
    const goHomePage = () => {
        navigate('/');
    }
  return (
    <div className='not-found-page'>
        <div className='not-found-content'>
            <h1>404 Not Found</h1>
            <span onClick={goHomePage}>Homepage</span>
        </div>
    </div>
  )
}

export default NotFoundPage