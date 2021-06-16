import React from 'react'
import {  useDispatch } from "react-redux";
import StarRatingComponent from 'react-star-rating-component';
import { FiltermovieRate } from '../redux/Action';
import { FiltermovieTitle } from '../redux/Action';
export const Filtre = (movies) => {
    const dispatch = useDispatch();
    return (
        <div>
 <input name="title_movie" type="text" placeholder="search film"  onChange= {(e)=> dispatch(FiltermovieTitle(e.target.value)) } />  
  <StarRatingComponent name="rate_movie"
   starCount={8}
    onStarClick={(value)=>dispatch(FiltermovieRate(value))}
  /> 
    </div>
    )
}
