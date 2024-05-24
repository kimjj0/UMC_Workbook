import React from 'react'
import styled from 'styled-components'


const Homepage = () => {

  return (
    <Body>
      <div className='homepage'>
        <div className='content-container'>
          <h3>환영합니다</h3>
        </div>
        <div className='search-container'>
          <h1>Find your Moives !</h1>
          <input className='search'></input>
        </div>
      </div>
    </Body>
  )
}

export default Homepage