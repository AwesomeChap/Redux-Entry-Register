import {FETCH_PEOPLE_REQUEST, FETCH_PEOPLE_SUCCESS, SAVE_PEOPLE_REQUEST, SAVE_PEOPLE_SUCCESS, SAVE_PEOPLE_ERROR} from '../constants';
import axios from 'axios';


export const FetchPeople = () => {
  return dispatch => {
    // let people;
    dispatch({
      type: FETCH_PEOPLE_REQUEST
    });
    apiClient.loadPeople().then(people => {
      // console.log(`From FetchPeople Action`);
      // console.log(people);
      dispatch({
        type: FETCH_PEOPLE_SUCCESS,
        payload: {
          people: people
        }
      })
    })
  }
}

export const SavePeople = (people) => {
  return dispatch => {
    dispatch({
      type: SAVE_PEOPLE_REQUEST
    });
    apiClient.savePeople(people).then(res => {
      // console.log(`From SavePeople Action : ${JSON.stringify(people)}`);
      dispatch({
        type: SAVE_PEOPLE_SUCCESS,
        payload: {
          people: people
        }
      })
    }).catch(e => console.log(e));
  }
}

const apiClient = {
  loadPeople: function () {
    return {
      then: function (cb) {
        setTimeout(() => {
          cb(JSON.parse(localStorage.people || '[]'))
        }, 1000);
      }
    }
  },

  savePeople: function (people) {
    const success = !!(this.count++ % 2);

    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (!success) return reject({ success });

        localStorage.people = JSON.stringify(people);
        resolve({ success });
      }, 1000);
    })
  },

  count: 1
}