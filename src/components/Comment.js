import React, { Component } from 'react';
import {
  Comment as SemanticComment,
} from 'semantic-ui-react';
import CommentNonEditable from './CommentNonEditable';
import CommentEditable from './CommentEditable';

class Comment extends Component {
  constructor(props) {
    super(props);

    const { inEditMode } = props;

    this.state = {
      inEditMode: inEditMode ? inEditMode : false,
    };
  }

  changeMode = (inEditMode) => {
    this.setState(() => ({
      inEditMode,
    }));
  }

  render() {

    const { inEditMode } = this.state;
    const { comment } = this.props;

    return (
      <SemanticComment>
        {inEditMode ? (
          <CommentEditable
            comment={comment}
          />
        ) : (
          <CommentNonEditable
            changeMode={this.changeMode}
            comment={comment}
          />
        )}
      </SemanticComment>
    );
  }
}

export default Comment;
