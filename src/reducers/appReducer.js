import {
  OPEN_NEW_POST_MENU,
  CLOSE_NEW_POST_MENU,
  ACTIVATE_EDIT_MODE_OF_POST,
  DEACTIVATE_EDIT_MODE_OF_POST,
  OPEN_NEW_COMMENT_MENU,
  CLOSE_NEW_COMMENT_MENU,
  ACTIVATE_EDIT_MODE_OF_COMMENT,
  DEACTIVATE_EDIT_MODE_OF_COMMENT,
  FINISH_INITIAL_LOADING,
} from '../actions/types';
import concat from 'lodash/concat';
import without from 'lodash/without';

const initialState = {
  isNewCommentMenuOpen: false,
  isNewPostMenuOpen: false,
  isInitialLoadingDone: false,
  postEditStates: [],
  commentEditStates: [],
};

const appReducer = (state = initialState, action) => {

  const {
    postId,
    commentId,
  } = action;

  switch (action.type) {

    case FINISH_INITIAL_LOADING:
      return {
        ...state,
        isInitialLoadingDone: true,
      }

    case OPEN_NEW_POST_MENU:
      return {
        ...state,
        isNewPostMenuOpen: true,
      }

    case CLOSE_NEW_POST_MENU:
      return {
        ...state,
        isNewPostMenuOpen: false,
      }

    case ACTIVATE_EDIT_MODE_OF_POST:
      return {
        ...state,
        postEditStates: concat(state.postEditStates, postId),
      }

    case DEACTIVATE_EDIT_MODE_OF_POST:
      return {
        ...state,
        postEditStates: without(state.postEditStates, postId),
      }

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
