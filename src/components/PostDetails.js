import React, { Component } from 'react';
import {
  Item,
} from 'semantic-ui-react';
import Post from './Post';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCommentsOfPost as fetchCommentsOfPostAction } from '../actions/commentActions';

class PostDetails extends Component {

  componentDidMount() {
    const { fetchCommentsOfPost, match: { params: { post_id } } } = this.props;

    fetchCommentsOfPost(post_id);
  }

  render() {
    const { post, comments } = this.props;

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

function mapStateToProps ({ postReducer: { posts }, commentReducer: { comments } }, ownProps) {
  const { post_id } = ownProps.match.params;

  return {
    comments,
    post: posts.find(post => post.id === post_id),
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
