import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function MovieCard({movieCard}) {
    const style={
        width:'18rem',
        height: '369px',
    }

    
    return (

    <div> 
        <Link to={`/description/${movieCard.id}`} style={{textDecoration:'none'}}>
            <Card style={{ width: '18rem' , border:'none'}} /*id={movieCard.id}*/>
                <Card.Img variant="top" src={movieCard.posterUrl} alt='movie_card' style={style}/>
                <Card.Body style={{backgroundColor:'#01040d', color: 'white'}}>
                    <Card.Title style={{textAlign:'center'}}>{movieCard.title}</Card.Title>
                    <br/>
                    <StarRatingComponent starCount={8} value={movieCard.rating}/>
                    <Button style={{marginLeft:'60px'}} variant="primary">Watch</Button>
                </Card.Body>
            </Card>
        </Link>  
    </div>    
    )
}
export default MovieCard