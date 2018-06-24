import {
  FETCH_COMMENTS_OF_POST,
  ADD_NEW_COMMENT_TO_POST,
} from '../actions/commentActions';
import concat from 'lodash/concat';

const initialState = {
  comments: [],
};

const commentReducer = (state = initialState, action) => {

  const { comments, comment } = action;

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

    default :
      return state
  }

}

export default commentReducer;
