import  {ADD_MOVIE} from './Action';
import {DELETE_MOVIE} from './Action';
export const movies=[{
    id:"1",
    title:"Kingsglaive",
    description: "King Regis commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTEwNzMxNTU5M15BMl5BanBnXkFtZTgwMzMyMjg3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    rate:"4",
    
     },
       
       {
         id:"2",
         title:"Always",
         description: "A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms. ",
         imageUrl: 'https://m.media-amazon.com/images/M/MV5BYmMzMDE1YTctNTg2MC00Mjg4LWI5NWQtOGY4ZGIzMWFhZTM4XkEyXkFqcGdeQXVyNTY1NTA1ODc@._V1_UY268_CR13,0,182,268_AL_.jpg',
         rate:"5",
       },
      
      
       
      ];
export let Reducermovie = (state=movies,action) => {
  
    switch (action.type){
    case ADD_MOVIE :
       return [...state,action.payload] 

    case DELETE_MOVIE :       
       return state.filter(movie=>movie.id !== action.payload)

    }
    return state;
}


