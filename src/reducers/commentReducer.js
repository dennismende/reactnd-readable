import {
  FETCH_COMMENTS_OF_POST,
  ADD_NEW_COMMENT_TO_POST,
  UPDATE_COMMENT,
  DELETE_COMMENT,
} from '../actions/commentActions';
import concat from 'lodash/concat';

const initialState = {
  comments: [],
};

const commentReducer = (state = initialState, action) => {

  const { comments, comment, commentId } = action;

  switch (action.type) {

    case FETCH_COMMENTS_OF_POST :
      return {
        ...state,
        comments,
      }

    case ADD_NEW_COMMENT_TO_POST:
      return {
        ...state,
        comments: concat(state.comments, comment),
      }

    case UPDATE_COMMENT:
      return {
        ...state,
        comments: concat(state.comments.filter(currentComment => currentComment.id !== comment.id), comment),
      }

    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(currentComment => currentComment.id !== commentId),
      }

    default :
      return state
  }

}

export default commentReducer;
