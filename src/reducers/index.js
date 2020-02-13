import { combineReducers } from 'redux';
import newsArticleReducer from './newsArticleReducer';

export default combineReducers({
  news: newsArticleReducer,
});
