import {FETCH_PEOPLE_REQUEST, FETCH_PEOPLE_SUCCESS, SAVE_PEOPLE_REQUEST, SAVE_PEOPLE_SUCCESS, SAVE_PEOPLE_ERROR} from '../constants';
import axios from 'axios';


export const FetchPeople = () => {
  return dispatch => {
    let people = [];
    dispatch({
      type : FETCH_PEOPLE_REQUEST
    });
    this.setTimeout(() => {
      people = JSON.parse(localStorage.people) || []
      dispatch({
        type : FETCH_PEOPLE_SUCCESS,
        payload : {
          people : people
        }
      })
    }, 1000);
  }
}

export const SavePeople = (people) => {
  return dispatch => {
    dispatch({
      type : SAVE_PEOPLE_REQUEST
    });
    this.setTimeout(() => {
      localStorage = JSON.stringify(people);
      dispatch({
        type : SAVE_PEOPLE_SUCCESS
      })
    }, 1000);
  }
}