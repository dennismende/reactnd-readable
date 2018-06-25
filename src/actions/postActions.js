import {
  closeNewPostMenu,
  deactivateEditModeOfPost,
} from '../actions/appActions';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_OF_SELECTED_CATEGORY = 'FETCH_POSTS_OF_SELECTED_CATEGORY';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export const fetchPosts = () => {
  return (dispatch, getState, api) => {
    api.getAllPosts()
      .then(posts => dispatch(fetchPostsSuccess(posts)));
  }
}

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS,
    posts,
  };
}

export const fetchPostsOfSelectedCategory = (categoryPath) => {
  return (dispatch, getState, api) => {
    api.getPostsOfSelectedCategory(categoryPath)
      .then(posts => dispatch(fetchPostsOfSelectedCategorySuccess(posts)));
  }
}

const fetchPostsOfSelectedCategorySuccess = (posts) => {
  return {
    type: FETCH_POSTS_OF_SELECTED_CATEGORY,
    posts,
  }
}

export const fetchPost = (postId) => {
  return (dispatch, getState, api) => {
    api.getPost(postId)
      .then(post => dispatch(fetchPostSuccess(post)));
  }
}

const fetchPostSuccess = (post) => {
  return {
    type: FETCH_POST,
    post,
  }
}

export const createPost = (post) => {
  return (dispatch, getState, api) => {
    api.createPost(post)
      .then(apiPost => dispatch(createPostSuccess(apiPost)))
      .then(() => dispatch(closeNewPostMenu()));
  };
}

const createPostSuccess = (post) => {
  return {
    type: CREATE_POST,
    post,
  };
}

export const updatePost = (post) => {
  const { id: postId } = post;

  return (dispatch, getState, api) => {
    api.updatePost(post)
      .then(post => dispatch(updatePostSuccess(post)))
      .then(() => dispatch(deactivateEditModeOfPost(postId)));
  };
}

const updatePostSuccess = (post) => {
  return {
    type: UPDATE_POST,
    post,
  };
}

export const deletePost = (post) => {
  const { id: postId} = post;

  return (dispatch, getState, api) => {
    api.deletePost(postId)
      .then(() => dispatch(deletePostSuccess(postId)));
  }
}

const deletePostSuccess = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
}

export const upVotePost = (postId) => {
  return (dispatch, getState, api) => {
    api.voteForPost(postId, 'upVote')
      .then(post => dispatch(upVotePostSuccess(post)));
  }
}

export const upVotePostSuccess = (post) => {
  return {
    type: UP_VOTE_POST,
    post,
  };
}

export const downVotePost = (postId) => {
  return (dispatch, getState, api) => {
    api.voteForPost(postId, 'downVote')
      .then(post => dispatch(downVotePostSuccess(post)));
  }
}

export const downVotePostSuccess = (post) => {
  return {
    type: DOWN_VOTE_POST,
    post,
  };
}
