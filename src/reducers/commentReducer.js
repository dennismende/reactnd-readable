import {
  FETCH_COMMENTS_OF_POST,
} from '../actions/commentActions';

const initialState = {
  comments: [],
};

const commentReducer = (state = initialState, action) => {

  const { comments } = action;

  switch (action.type) {

    case FETCH_COMMENTS_OF_POST :
      return {
        ...state,
        comments,
      }

    default :
      return state
  }

}

export default commentReducer;
