import {
  OPEN_NEW_COMMENT_MENU,
  CLOSE_NEW_COMMENT_MENU,
} from '../actions/appActions';

const initialState = {
  isNewCommentMenuOpen: false,
};

const appReducer = (state = initialState, action) => {

  const { isNewCommentMenuOpen } = action;

  switch (action.type) {

    case OPEN_NEW_COMMENT_MENU:
      return {
        ...state,
        isNewCommentMenuOpen,
      }

    case CLOSE_NEW_COMMENT_MENU:
      return {
        ...state,
        isNewCommentMenuOpen,
      }

    default :
      return state
  }

}

export default appReducer;
