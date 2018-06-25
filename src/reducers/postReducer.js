import {
  FETCH_POSTS,
  FETCH_POSTS_OF_SELECTED_CATEGORY,
  FETCH_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../actions/postActions';
import concat from 'lodash/concat';

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {

  const { posts, post, postId } = action;

  switch (action.type) {

    case FETCH_POSTS :
      return {
        ...state,
        posts,
      }

    case FETCH_POSTS_OF_SELECTED_CATEGORY:
      return {
        ...state,
        posts,
      }

    case FETCH_POST:
      return {
        ...state,
        posts: concat(state.posts.filter(currentPost => currentPost.id !== post.id), post),
      }

    case CREATE_POST:
      return {
        ...state,
        posts: concat(state.posts, post),
      }

    case UPDATE_POST:
      return {
        ...state,
        posts: concat(state.posts.filter(currentPost => currentPost.id !== post.id), post),
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(currentPost => currentPost.id !== postId),
      }

    default :
      return state
  }

}

export default postReducer;
