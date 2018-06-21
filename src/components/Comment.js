import React, { Component } from 'react';
import {
  Comment as SemanticComment,
} from 'semantic-ui-react';
import CommentNonEditable from './CommentNonEditable';
import CommentEditable from './CommentEditable';

class Comment extends Component {
  state = {
    inEditMode: false
  }

  changeMode = (inEditMode) => {
    this.setState(() => ({
      inEditMode,
    }));
  }

  render() {

    const { inEditMode } = this.state;

    return (
      <SemanticComment>

        {inEditMode ? (
          <CommentEditable />
        ) : (
          <CommentNonEditable changeMode={this.changeMode} />
        )}
      </SemanticComment>
    );
  }
}

export default Comment;
