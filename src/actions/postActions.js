export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {
  return (dispatch, getState, api) => {
    api.getAllPosts()
      .then((posts) => dispatch(fetchPostsSuccess(posts)));
  }
}

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS,
    posts,
  };
}
