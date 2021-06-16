import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Card from 'react-bootstrap/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';

import { Deletemovie } from '../redux/Action';
const Movie = ({movie}) => {
  const dispatch = useDispatch();
    return (
        <div>
    <Card style={{ width: 280, height:500, backgroundColor:" rgb(8, 8, 15)"}}>
       <Card.Img style={{height: 270}} src={movie.imageUrl} alt=""  />
       <Card.Body>
         <Card.Title style={{color:"red"}}>{movie.title} </Card.Title>
         <Card.Text style={{fontSize:12, color:"white"}}>{movie.description} </Card.Text>
         </Card.Body>
         <Card.Body>
         <StarRatingComponent
             name="rate1"  
             starCount={8}
             value={movie.rate}/>
         <button  onClick ={()=>dispatch(Deletemovie(movie.id))} >  delete </button>
    </Card.Body>
    </Card>
        </div>
    )
}
export default Movie;