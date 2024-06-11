import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  color: white;
  margin-top: 80px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  height: calc(100% - 130px);
  width: 100%;
  > div > * {
    margin-bottom: 30px;
  }
  > div > h1 {
    padding: 0;
    font-size: 50px
  }
`

const NotFoundPage = () => {
    const navigate = useNavigate();
    const goHomePage = () => {
        navigate('/');
    }
  return (
    <NotFoundContainer>
        <div>
            <h1>404 Not Found</h1>
            <span onClick={goHomePage}>Homepage</span>
        </div>
    </NotFoundContainer>
  )
}

export default NotFoundPage