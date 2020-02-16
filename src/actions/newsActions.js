import { CREATE_NEWS_ARTICLE, DELETE_NEWS_ARTICLE } from './types';

export const createArticle = text => dispatch => {
  dispatch({
    type: CREATE_NEWS_ARTICLE,
    payload: text
  });
};

export const deleteArticle = text => dispatch => {
  alert("delete article: " + text);
  dispatch({
    type: DELETE_NEWS_ARTICLE,
    payload: text
  });
};
