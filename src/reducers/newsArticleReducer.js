import {
    CREATE_NEWS_ARTICLE,
    FETCH_NEWS
  } from '../actions/types';
  
  const initialState = {
    news: ['1', '2', '3'],
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case CREATE_NEWS_ARTICLE:
        return {
          ...state,
          news: action.payload,
        };
        // case FETCH_NEWS:
        // return {
        //   ...state,
        //   news: action.payload,
        // };
      default:
        return state;
    }
  }