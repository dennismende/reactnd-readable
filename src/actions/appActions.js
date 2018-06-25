export const OPEN_NEW_COMMENT_MENU = 'OPEN_NEW_COMMENT_MENU';
export const CLOSE_NEW_COMMENT_MENU = 'CLOSE_NEW_COMMENT_MENU';

export const openNewCommentMenu = () => {
  return {
    type: OPEN_NEW_COMMENT_MENU,
    isNewCommentMenuOpen: true,
  };
}

export const closeNewCommentMenu = () => {
  return {
    type: CLOSE_NEW_COMMENT_MENU,
    isNewCommentMenuOpen: false,
  };
}
