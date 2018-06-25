import React, { Component } from 'react';
import {
  Comment as SemanticComment,
} from 'semantic-ui-react';
import CommentNonEditable from './CommentNonEditable';
import CommentEditable from './CommentEditable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Comment extends Component {
  render() {
    const { comment, isEditModeOfCommentActive, isInEditMode } = this.props;

    return (
      <SemanticComment>
        {isEditModeOfCommentActive || isInEditMode ? (
          <CommentEditable
            comment={comment}
          />
        ) : (
          <CommentNonEditable
            comment={comment}
          />
        )}
      </SemanticComment>
    );
  }
}

function mapStateToProps ({ appReducer: { commentEditStates } }, ownProps) {
  const { comment } = ownProps;
  const isEditModeOfCommentActive = comment ? commentEditStates.includes(comment.id) : false;

  return {
    isEditModeOfCommentActive,
  };
}

export default withRouter(connect(
  mapStateToProps,
  null,
)(Comment))
