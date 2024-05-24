import React from 'react'
import Spinner from './assets/Spinner1.gif';


const Loading = () => {
  return (
    <div className='spinner'>
        <img src={Spinner}/>
    </div>
  )
}

export default Loading