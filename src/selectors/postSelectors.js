import { createSelector } from 'reselect';

const getPostId = (state, props) => props.match.params.post_id;

const getPosts = (state) => state;

const getSelectedPost = createSelector(
  [getPosts, getPostId],
  (posts, postId) => posts.find(post => post.id === postId)
);

export default getSelectedPost;
