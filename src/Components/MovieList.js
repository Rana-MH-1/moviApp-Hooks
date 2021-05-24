import React from 'react'
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({movieList}) => {
    return (
        <div className='moviegrid'>
            {movieList.map(movie => <MovieCard key= {movie.id} movieCard={movie} />)}
        </div>
    )
}
export default MovieList;


