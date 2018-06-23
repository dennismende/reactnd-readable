import {
  FETCH_POSTS,
  FETCH_POSTS_OF_SELECTED_CATEGORY,
} from '../actions/postActions';

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {

  const { posts } = action;

  switch (action.type) {

    case FETCH_POSTS :
      return {
        ...state,
        posts
      }

    case FETCH_POSTS_OF_SELECTED_CATEGORY:
      return {
        ...state,
        posts
      }

    default :
      return state
  }

}

export default postReducer;
