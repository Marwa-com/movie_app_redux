import {RATING_FILTER} from './Action';

export let RateFiltermovie = (state="",action) => {
  
    if(action.type === RATING_FILTER )return action.payload;
    return state;
  };