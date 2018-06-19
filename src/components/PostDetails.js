import React, { Component } from 'react';
import {
  Item,
  Label,
} from 'semantic-ui-react';
import Post from './Post';

class PostDetails extends Component {
  state = {
    inEditMode: false
  }

  render() {

    const { inEditMode } = this.state;

    return (
      <Item.Group>
        <Post />
      </Item.Group>


    );
  }
}

export default PostDetails;
