import React, { Component } from 'react';
import {
  Comment as SemanticComment,
  Header
} from 'semantic-ui-react';
import Comment from './Comment';

class CommentList extends Component {

  render() {

    return (
      <SemanticComment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>

        <Comment />
      </SemanticComment.Group>
    );
  }
}

export default CommentList;
