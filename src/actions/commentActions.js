import { fetchPost } from '../actions/postActions';
import {
  closeNewCommentMenu,
  deactivateEditModeOfComment,
} from '../actions/appActions';

export const FETCH_COMMENTS_OF_POST = 'FETCH_COMMENTS_OF_POST';
export const ADD_NEW_COMMENT_TO_POST = 'ADD_NEW_COMMENT_TO_POST';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const fetchCommentsOfPost = (postId) => {
  return (dispatch, getState, api) => {
    api.getCommentsOfPost(postId)
      .then(comments => dispatch(fetchCommentsOfPostSuccess(comments)));
  }
}

const fetchCommentsOfPostSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_OF_POST,
    comments,
  };
}

export const addNewCommentToPost = (comment) => {
  return (dispatch, getState, api) => {
    api.addCommentToPost(comment)
      .then(apiComment => dispatch(addNewCommentToPostSuccess(apiComment)))
      .then(() => dispatch(fetchPost(comment.parentId)))
      .then(() => dispatch(closeNewCommentMenu()));
  };
}

const addNewCommentToPostSuccess = (comment) => {
  return {
    type: ADD_NEW_COMMENT_TO_POST,
    comment,
  };
}

export const updateComment = (comment) => {
  const { id: commentId } = comment;

  return (dispatch, getState, api) => {
    api.updateComment(comment)
      .then(comment => dispatch(updateCommentSuccess(comment)))
      .then(() => dispatch(deactivateEditModeOfComment(commentId)));
  };
}

const updateCommentSuccess = (comment) => {
  return {
    type: UPDATE_COMMENT,
    comment,
  };
}
