// import R from 'ramda';

import { POSTS } from '../../../top-posts/top-posts.actions';

export const initialState = {
  all: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS.SUCCESS:
      return { ...state, all: action.payload };
    case POSTS.FAILURE:
      window.alert('Failed to fetch posts: ', action.payload);
      return state;
    default:
      return state;
  }
};