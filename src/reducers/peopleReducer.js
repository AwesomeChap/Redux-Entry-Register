import {FETCH_PEOPLE_REQUEST, FETCH_PEOPLE_SUCCESS, SAVE_PEOPLE_REQUEST, SAVE_PEOPLE_SUCCESS, SAVE_PEOPLE_ERROR} from '../constants';

const initialState = {
 people : [],
 isLoading: false,
 saveStatus : 'READY',
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_PEOPLE_REQUEST: 
      return Object.assign(state,{},{
        isLoading: true
      })
    case FETCH_PEOPLE_SUCCESS : 
      return Object.assign(state,{},{
        people : action.payload.people,
        isLoading : false
      })
    case SAVE_PEOPLE_REQUEST : 
      return Object.assign(state,{},{
        saveStatus : 'SAVING'
      })
    case SAVE_PEOPLE_SUCCESS : 
      return Object.assign(state,{},{
        people : action.payload.people,
        saveStatus : 'SAVED'
      })
    default : return state;
  }
}