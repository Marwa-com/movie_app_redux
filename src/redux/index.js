import { combineReducers } from "redux";
import {Reducermovie} from './Reducermovie';
import {TitleFiltermovie} from './TitleFiltermovie';
import {RateFiltermovie} from './RateFiltermovie';
export default combineReducers({ Reducermovie, TitleFiltermovie,RateFiltermovie });
