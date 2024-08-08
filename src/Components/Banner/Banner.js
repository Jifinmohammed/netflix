import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>  
      <div className='content'>
        <h1 className='title'>Movie name</h1>
        <div className='buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, recusandae?</h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
