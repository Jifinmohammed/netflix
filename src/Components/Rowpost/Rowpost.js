import React,{useEffect,useState} from 'react'
import "./Rowpost.css"
import { apikey,imageurl } from '../../Const/const'
import axios from '../../Axios'
function Rowpost() {
  const[Movies,setMovies] = useState([])

  useEffect(()=>{
      axios.get(`discover/tv?api_key=${apikey}&with_networks=213`).then(response=>{
          console.log(response.data)
        setMovies(response.data.results)
      })
  },[])
  return (
    <div className='row'>
      <h2>Netflix originals</h2>
      <div className="posters">
        {Movies.map((obj)=>

           <img src={`${imageurl+obj.backdrop_path}`} className='poster'/>

        )}
        
      </div>
    </div>
  )
}

export default Rowpost
