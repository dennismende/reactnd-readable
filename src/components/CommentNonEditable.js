import React, { Component } from 'react';
import {
  Comment
} from 'semantic-ui-react';
import noImage from '../images/no-image.png';

class CommentNonEditable extends Component {
  render() {

    return (
      <Comment>
        <Comment.Avatar src={noImage} />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src={noImage} />
            <Comment.Content>
              <Comment.Author as='a'>Jenny Hess</Comment.Author>
              <Comment.Metadata>
                <div>Just now</div>
              </Comment.Metadata>
              <Comment.Text>Elliot you are always so right :)</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Comment>
    );
  }
}

export default CommentNonEditable;
