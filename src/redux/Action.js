export const ADD_MOVIE ='ADD MOVIE';
export const DELETE_MOVIE ='DELETE_MOVIE';
export const TITLE_FILTER ='TITLE_FILTER';
export const RATING_FILTER ='RATING_FILTER';

export const addmovie = (movie)=>{
    return {
    type:ADD_MOVIE,
    payload: movie
   }
}

export const Deletemovie = (id)=>{
    return {
    type:DELETE_MOVIE,
    payload: id
   }
}

export const FiltermovieTitle = (title_filter)=>{
    return {
    type:TITLE_FILTER,
    payload: title_filter
   }
}

export const FiltermovieRate = (rate_filter)=>{
    return {
    type:RATING_FILTER,
    payload: rate_filter
   }
}