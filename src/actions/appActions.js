export const OPEN_NEW_COMMENT_MENU = 'OPEN_NEW_COMMENT_MENU';
export const CLOSE_NEW_COMMENT_MENU = 'CLOSE_NEW_COMMENT_MENU';
export const ACTIVATE_EDIT_MODE_OF_COMMENT = 'ACTIVATE_EDIT_MODE_OF_COMMENT';
export const DEACTIVATE_EDIT_MODE_OF_COMMENT = 'DEACTIVATE_EDIT_MODE_OF_COMMENT';

export const openNewCommentMenu = () => {
  return {
    type: OPEN_NEW_COMMENT_MENU,
  };
}

export const closeNewCommentMenu = () => {
  return {
    type: CLOSE_NEW_COMMENT_MENU,
  };
}

export const activateEditModeOfComment = (commentId) => {
  return {
    type: ACTIVATE_EDIT_MODE_OF_COMMENT,
    commentId,
  };
}


export const deactivateEditModeOfComment = (commentId) => {
  return {
    type: DEACTIVATE_EDIT_MODE_OF_COMMENT,
    commentId,
  };
}
