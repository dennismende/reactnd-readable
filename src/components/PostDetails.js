import React, { Component } from 'react';
import {
  Item,
} from 'semantic-ui-react';
import Post from './Post';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PostDetails extends Component {

  render() {
    const { post } = this.props;

    return (
      <div>
        <Item.Group>
          {post &&
            <Post
              post={post}
            />
          }
        </Item.Group>

        <CommentList />
      </div>
    );
  }
}

function mapStateToProps ({ postReducer: { posts } }, ownProps) {
  const { post_id } = ownProps.match.params

  return {
    post: posts.find(post => post.id === post_id),
  };
}

export default withRouter(connect(
  mapStateToProps,
  null,
)(PostDetails))
