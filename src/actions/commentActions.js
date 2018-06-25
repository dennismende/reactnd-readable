import { fetchPost } from '../actions/postActions';
import { closeNewCommentMenu } from '../actions/appActions';

export const FETCH_COMMENTS_OF_POST = 'FETCH_COMMENTS_OF_POST';
export const ADD_NEW_COMMENT_TO_POST = 'ADD_NEW_COMMENT_TO_POST';

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
      .then(apiComment => {
        const { voteScore, deleted, parentDeleted} = apiComment;

        const newComment = {
          ...comment,
          voteScore,
          deleted,
          parentDeleted,
        }

        return dispatch(addNewCommentToPostSuccess(newComment))
      })
      .then(() => dispatch(fetchPost(comment.parentId)))
      .then(() => dispatch(closeNewCommentMenu()));
  }
}

const addNewCommentToPostSuccess = (comment) => {
  return {
    type: ADD_NEW_COMMENT_TO_POST,
    comment,
  };
}
