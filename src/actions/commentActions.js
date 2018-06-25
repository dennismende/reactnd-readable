import { fetchPost } from '../actions/postActions';
import {
  closeNewCommentMenu,
  deactivateEditModeOfComment,
} from '../actions/appActions';
import {
  FETCH_COMMENTS_OF_POST,
  ADD_NEW_COMMENT_TO_POST,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
}
from './types';

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

export const deleteComment = (comment) => {
  const { parentId, id: commentId} = comment;

  return (dispatch, getState, api) => {
    api.deleteComment(commentId)
      .then(() => dispatch(deleteCommentSuccess(commentId)))
      .then(() => dispatch(fetchPost(parentId)));
  }
}

export const deleteCommentSuccess = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
}

export const upVoteComment = (commentId) => {
  return (dispatch, getState, api) => {
    api.voteForComment(commentId, 'upVote')
      .then(comment => dispatch(upVoteCommentSuccess(comment)));
  }
}

export const upVoteCommentSuccess = (comment) => {
  return {
    type: UP_VOTE_COMMENT,
    comment,
  };
}

export const downVoteComment = (commentId) => {
  return (dispatch, getState, api) => {
    api.voteForComment(commentId, 'downVote')
      .then(comment => dispatch(downVoteCommentSuccess(comment)));
  }
}

export const downVoteCommentSuccess = (comment) => {
  return {
    type: DOWN_VOTE_COMMENT,
    comment,
  };
}
