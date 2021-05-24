import React from 'react';
import {Form} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const Filter= ({HandleTitleChange, HandleRatingChange}) => {
    const style={width:'250px',marginRight:'40px'}
    const style1={display: 'flex', gridTemplateColumns:'row', paddingLeft:'800px', margin:'0px 0px 50px 0px',paddingTop:'40px'}
    return (
        <div>
                <Form style={style1}>
                <Form.Group>
                    <Form.Control style={style} type="text" placeholder="Search" 
                    onChange={(e)=> HandleTitleChange(e.target.value)} />  
                    </Form.Group>
                    <StarRatingComponent starCount={8} emptyStarColor={'white'} onStarClick={(value)=>HandleRatingChange(value)}/>
                </Form>
        </div>
    )
}

export default Filter

