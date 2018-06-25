import {
  OPEN_NEW_POST_MENU,
  CLOSE_NEW_POST_MENU,
  ACTIVATE_EDIT_MODE_OF_POST,
  DEACTIVATE_EDIT_MODE_OF_POST,
  OPEN_NEW_COMMENT_MENU,
  CLOSE_NEW_COMMENT_MENU,
  ACTIVATE_EDIT_MODE_OF_COMMENT,
  DEACTIVATE_EDIT_MODE_OF_COMMENT,
}
from './types';

export const openNewPostMenu = () => {
  return {
    type: OPEN_NEW_POST_MENU,
  };
}

export const closeNewPostMenu = () => {
  return {
    type: CLOSE_NEW_POST_MENU,
  };
}

export const activateEditModeOfPost = (postId) => {
  return {
    type: ACTIVATE_EDIT_MODE_OF_POST,
    postId,
  };
}


export const deactivateEditModeOfPost = (postId) => {
  return {
    type: DEACTIVATE_EDIT_MODE_OF_POST,
    postId,
  };
}

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
