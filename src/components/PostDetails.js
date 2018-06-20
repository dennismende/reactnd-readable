import React, { Component } from 'react';
import {
  Comment,
  Header,
  Item,
} from 'semantic-ui-react';
import Post from './Post';
import CommentList from './CommentList';
import noImage from '../images/no-image.png';

class PostDetails extends Component {
  state = {
    inEditMode: false
  }

  render() {

    const { inEditMode } = this.state;

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
