import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'


function App() {

  const [movie,setMovie]=useState([])

  const fetchmovie=()=>
    {
      axios.get('https://www.omdbapi.com/?s=kabhi&apikey=1252de98').then((res)=>
      {
         console.log(res)
         setMovie(res.data.Search)
      })
    }

  return (
    
    /*<h1>Hello World!</h1>*/
    <>
    <button  onClick={fetchmovie}>fetch movie</button>
    {
    movie.map((value,index)=>{
      return(<h3 key={index}>{value.Title}</h3>);
    })
   }
  
    </>
  )
}

export default App;
