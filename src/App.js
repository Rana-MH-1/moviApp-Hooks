import React, {useState} from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import Add from './Components/Add';

function App({movieList,setMovieList}) {

const [search, setSearch] = useState('');
const [rate, setRate] = useState(0);
const HandleTitleChange =(search)=>{setSearch(search)}
const HandleRatingChange = (rate)=>{setRate(rate)}
const addmovie =(newMovie) => setMovieList([...movieList,newMovie])

  return (
    <div className='movieapp'>
      <header>
        <Filter HandleTitleChange={HandleTitleChange} HandleRatingChange={HandleRatingChange} /> 
      </header>
      <MovieList movieList={movieList.filter(el=>el.title.toLowerCase().trim().includes(search.toLowerCase().trim()) && el.rating >= rate )}/>
      
      <Add addmovie={addmovie}></Add>
    </div>
  )
}

export default App
