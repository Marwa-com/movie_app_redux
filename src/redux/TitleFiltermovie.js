import {TITLE_FILTER} from './Action';

export let TitleFiltermovie = (state="",action) => {
  
    if(action.type === TITLE_FILTER )return action.payload;
    return state;
  };
