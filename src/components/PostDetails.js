import React, { Component } from 'react';
import {
  Item,
} from 'semantic-ui-react';
import Post from './Post';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { fetchCommentsOfPost as fetchCommentsOfPostAction } from '../actions/commentActions';
import getSelectedPost from '../selectors/postSelectors';

class PostDetails extends Component {

  componentDidMount() {
    const { fetchCommentsOfPost, match: { params: { post_id } } } = this.props;

    fetchCommentsOfPost(post_id);
  }

  render() {
    const { post, comments, isInitialLoadingDone } = this.props;

    if (isInitialLoadingDone && !post) {
      return <Redirect to='/page-not-found' />;
    }

    return (
      <div>
        <Item.Group>
          {post &&
            <Post
              post={post}
            />
          }
        </Item.Group>

        <CommentList comments={comments} />
      </div>
    );
  }
}

function mapStateToProps ({ postReducer: { posts }, commentReducer: { comments }, appReducer: { isInitialLoadingDone } }, ownProps) {
  return {
    isInitialLoadingDone,
    comments,
    post: getSelectedPost(posts, ownProps),
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCommentsOfPost: (postId) => dispatch(fetchCommentsOfPostAction(postId)),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetails))
