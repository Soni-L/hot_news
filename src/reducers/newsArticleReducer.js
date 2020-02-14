import { CREATE_NEWS_ARTICLE, FETCH_NEWS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_NEWS_ARTICLE:
      return {
        ...state,
        news: action.payload
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
