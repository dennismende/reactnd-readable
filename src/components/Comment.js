import React, { Component } from 'react';
import {
  Item,
  Label,
} from 'semantic-ui-react';
import CommentNonEditable from './CommentNonEditable';
import CommentEditable from './CommentEditable';

class Comment extends Component {
  state = {
    inEditMode: false
  }

  render() {

    const { inEditMode } = this.state;

    return (
      <React.Fragment>
        {inEditMode ? (
          <CommentEditable />
        ) : (
          <CommentNonEditable />
        )}
      </React.Fragment>
    );
  }
}

export default Comment;
