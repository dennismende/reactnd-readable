export const FETCH_COMMENTS_OF_POST = 'FETCH_COMMENTS_OF_POST';

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
