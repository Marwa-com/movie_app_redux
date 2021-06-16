import React,{useState} from 'react'
import { Add } from './Add';
import { Filtre } from './filtre';
import Movie from './Movie';
import {useSelector} from 'react-redux';

export const Movielist = () => {

  let movies= useSelector(state => state.Reducermovie);
  let mp = useSelector(state => state.TitleFiltermovie);
  let rating = useSelector(state => state.RateFiltermovie);
    return (
        <div   >
           <div className="sousapp">
        <h2 style={{ color:'red', marginLeft:50, marginRight:100}}> watch your best movie here </h2>
        <Filtre />
        <Add />
        </div>
        <div className='card-deck'>
        {movies.filter(el=>el.title.toLowerCase().includes(mp.toLowerCase().trim()) && el.rate >= rating ).map(movie => <Movie movie={movie}  />)}
        </div>
        </div>
    )
}
