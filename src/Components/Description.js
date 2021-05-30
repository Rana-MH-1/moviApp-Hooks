import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Description = ({match,history,movieCard}) => {

    let movies = movieCard.filter(el => el.id === match.params.movieID);
    const style={backgroundImage:'url(https://image.freepik.com/vecteurs-libre/ensemble-elements-film_74855-15482.jpg)',padding:'40px'}
    const style1={padding: '.5rem 1rem',backgroundColor: 'rgba(0,0,0,.03)',borderTop: '1px solid rgba(0,0,0,.125)'}
    

    console.log(movies);
    return (
        <div>
            <Card className="text-center">
                <Card.Body>
                <Card.Title style={{color:'#0d6efd'}}><h2>{movies.map(el => el.title)}</h2></Card.Title>
                <br/>
                <Card.Text style={style1}><h5>{movies.map(el => el.description)} </h5></Card.Text>
            <div style={style}>    
                <iframe width="560" height="315" src={movies.map(el=> el.trailerUrl)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
    
            </Card.Body>
            <Card.Footer><Button variant="primary" onClick={()=> history.goBack()}>Go Home</Button></Card.Footer>
            </Card>
           
        </div>    
    )
}

export default Description
