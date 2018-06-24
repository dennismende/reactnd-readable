import React, { Component } from 'react';
import {
  Comment,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react';
import noImage from '../images/no-image.png';

class CommentEditable extends Component {
  render() {
    const { comment } = this.props;

    return (
      <React.Fragment>
        <Comment.Avatar src={noImage} />
        <Comment.Content>
          <Form>
            <Comment.Author>
              <Input
                placeholder='author'
                value={comment.author}
              />
            </Comment.Author>
            <Comment.Text>
              <TextArea
                placeholder='comment body'
                value={comment.body}
              />
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Save</Comment.Action>
            </Comment.Actions>
          </Form>
        </Comment.Content>
      </React.Fragment>
    );
  }
}

export default CommentEditable;
