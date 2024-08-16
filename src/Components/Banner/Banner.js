import React, { useEffect, useState } from 'react'
import {apikey,imageurl} from '../../Const/const'
import axios from '../../Axios'
import "./Banner.css"

function Banner() {
  const [Movie, setMovie] = useState()
useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}&language=en-US`).then((response) =>{
      console.log(response.data.results[1])
      setMovie(response.data.results[1])
    })
}, [])
  return (
    <div style={{backgroundImage:`URL(${ Movie ? imageurl+Movie.backdrop_path : ""})`}} className='banner'>  
      <div className='content'>
        <h1 className='title'>{Movie ? Movie.title : ""}</h1>
        <div className='buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{Movie ? Movie.overview :""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
