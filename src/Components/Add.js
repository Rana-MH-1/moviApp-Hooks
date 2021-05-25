import React, {useState} from 'react';
import {Button,Form, Modal} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const Add = ({addmovie}) => {

const [id, setId] = useState(uuidv4());
const [movie, setMovie] = useState({
    title: '',
    posterUrl: '',
    description:'',
    rating:0
    });    
    console.log(movie)
const [show, setShow] = useState(false);
const handleClose = () => {
    setShow(false) 
    setId('')
    setMovie({
    title: '',
    posterUrl: '',
    description:'',
    rating:0
    })};

const handleShow = () => setShow(true);
const Handlechange = (e) =>setMovie({...movie,id,[e.target.name]: e.target.value})
const HandleSave = ()=>{
    addmovie({id,...movie})
    handleClose()
}

const style={
    margin : '40px 620px',
    width : '130px',
    fontWeight:'bold'
}

    return (
        <>
    <Button variant="primary" onClick={handleShow} style={style}>
        Add a movie 
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add your favourite movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="title" name='title' onChange={Handlechange}/>
    <Form.Label>posterUrl</Form.Label>
    <Form.Control type="text" placeholder="posterUrl" name='posterUrl' onChange={Handlechange} />
    <Form.Label>Rating</Form.Label>
    <Form.Control type="text" placeholder="Rating" name='rating' onChange={Handlechange} />
    
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>description</Form.Label>
    <Form.Control as="textarea" rows={3} name='description' onChange={Handlechange} />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={HandleSave}>
            Save
        </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default Add
