import React, { Component } from 'react';
import {
  Item,
} from 'semantic-ui-react';
import Post from './Post';
import CommentList from './CommentList';

class PostDetails extends Component {

  render() {

    return (
      <div>
        <Item.Group>
          <Post />
        </Item.Group>

        <CommentList />
      </div>
    );
  }
}

export default PostDetails;
