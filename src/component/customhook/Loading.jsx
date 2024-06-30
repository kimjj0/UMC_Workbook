import React from 'react'
import Spinner from '../../assets/Spinner3.gif'
import styled from 'styled-components'

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height to center the spinner vertically */
`

const Loading = () => {
  return (
    <SpinnerContainer>
        <img src={Spinner} alt='loading' width="10%"/>
    </SpinnerContainer>
  )
}

export default Loading