import React from 'react'
import Search from './Search'
import styled from 'styled-components'

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%
  height: 100%;
  text-align: center;
  padding-top: 10vh;
  overflow-y: auto;
  overflow-x: hidden;
`

const ContentContainer = styled.div`
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  color: white;
  height: 30vh;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  
`

const Homepage = () => {

  return (
    <HomepageContainer>
      <ContentContainer>
        <h3>환영합니다</h3>
      </ContentContainer>
      <Search/>
    </HomepageContainer>
  )
}

export default Homepage