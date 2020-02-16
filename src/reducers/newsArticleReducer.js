import { CREATE_NEWS_ARTICLE, DELETE_NEWS_ARTICLE } from '../actions/types';

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
    case DELETE_NEWS_ARTICLE:
    return {
      ...state,
      news: state.news.filter(element => element.timestamp != action.payload),
    };
    default:
      return state;
  }
}
