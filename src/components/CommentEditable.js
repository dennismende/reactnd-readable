import React, { Component } from 'react';
import {
  Comment
} from 'semantic-ui-react';
import noImage from '../images/no-image.png';

class CommentEditable extends Component {
  render() {

    return (
      <React.Fragment>
        <Comment.Avatar src={noImage} />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Save</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </React.Fragment>
    );
  }
}

export default CommentEditable;
