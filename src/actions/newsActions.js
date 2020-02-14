import { CREATE_NEWS_ARTICLE, FETCH_NEWS } from './types';

export const createArticle = text => dispatch => {
  console.log('createArticle');
  dispatch({
    type: CREATE_NEWS_ARTICLE,
    payload: text
  });
};
