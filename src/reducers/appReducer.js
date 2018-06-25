import {
  OPEN_NEW_COMMENT_MENU,
  CLOSE_NEW_COMMENT_MENU,
  ACTIVATE_EDIT_MODE_OF_COMMENT,
  DEACTIVATE_EDIT_MODE_OF_COMMENT,
} from '../actions/appActions';
import concat from 'lodash/concat';
import without from 'lodash/without';

const initialState = {
  isNewCommentMenuOpen: false,
  commentEditStates: [],
};

const appReducer = (state = initialState, action) => {

  const {
    commentId,
  } = action;

  switch (action.type) {

    case OPEN_NEW_COMMENT_MENU:
      return {
        ...state,
        isNewCommentMenuOpen: true,
      }

    case CLOSE_NEW_COMMENT_MENU:
      return {
        ...state,
        isNewCommentMenuOpen: false,
      }

    case ACTIVATE_EDIT_MODE_OF_COMMENT:
      return {
        ...state,
        commentEditStates: concat(state.commentEditStates, commentId),
      }

    case DEACTIVATE_EDIT_MODE_OF_COMMENT:
      return {
        ...state,
        commentEditStates: without(state.commentEditStates, commentId),
      }

    default :
      return state
  }

}

export default appReducer;
