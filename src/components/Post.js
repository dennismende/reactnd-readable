import React, { Component } from 'react';
import PostNonEditable from './PostNonEditable';
import PostEditable from './PostEditable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Post extends Component {
  render() {
    const { post, isEditModeOfPostActive, isInEditMode } = this.props;

    return (
      <React.Fragment>
        {isEditModeOfPostActive || isInEditMode ? (
          <PostEditable
            post={post}
          />
        ) : (
          <PostNonEditable
            post={post}
          />
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps ({ appReducer: { postEditStates } }, ownProps) {
  const { post } = ownProps;
  const isEditModeOfPostActive = post ? postEditStates.includes(post.id) : false;

  return {
    isEditModeOfPostActive,
  };
}

export default withRouter(connect(
  mapStateToProps,
  null,
)(Post))
