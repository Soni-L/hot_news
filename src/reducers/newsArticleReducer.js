import { CREATE_NEWS_ARTICLE, FETCH_NEWS } from '../actions/types';

const initialUserState = {
  news:[]
}

export default function(state = initialUserState, action) {
  switch (action.type) {
    case CREATE_NEWS_ARTICLE:
      return {
        ...state,
        news:[...state.news, action.payload]
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
