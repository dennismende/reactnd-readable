import React, { Component } from 'react';
import {
  Comment,
  Icon,
  Statistic,
} from 'semantic-ui-react';
import noImage from '../images/no-image.png';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { activateEditModeOfComment as activateEditModeOfCommentAction } from '../actions/appActions';
import {
  deleteComment as deleteCommentAction,
  upVoteComment as upVoteCommentAction,
  downVoteComment as downVoteCommentAction,
} from '../actions/commentActions';

class CommentNonEditable extends Component {
  onChangeToEditMode = () => {
    const { activateEditModeOfComment, comment } = this.props;

    activateEditModeOfComment(comment.id);
  }

  deleteComment = () => {
    const { deleteComment, comment } = this.props;

    deleteComment(comment);
  }

  upVote = () => {
    const { upVoteComment, comment: { id: commentId } } = this.props;

    upVoteComment(commentId);
  }

  downVote = () => {
    const { downVoteComment, comment: { id: commentId } } = this.props;

    downVoteComment(commentId);
  }

  render() {
    const { comment } = this.props;

    return (
      <React.Fragment>
        <Comment.Avatar src={noImage} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.author}</Comment.Author>
          <Comment.Metadata>
            <div><Moment format='DD-MM-YYYY HH:mm'>{comment.timestamp}</Moment></div>
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon name='heart outline' size='small' />
                  {comment.voteScore}
                </Statistic.Value>
              </Statistic>
              <span>
                <Icon name='angle up' size='large' onClick={this.upVote} />
                <Icon name='angle down' size='large' onClick={this.downVote} />
              </span>
            </Comment.Action>
            <Comment.Action onClick={this.onChangeToEditMode}>Edit</Comment.Action>
            <Comment.Action onClick={this.deleteComment}>Delete</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    activateEditModeOfComment: (comment) => dispatch(activateEditModeOfCommentAction(comment)),
    deleteComment: (commentId) => dispatch(deleteCommentAction(commentId)),
    upVoteComment: (commentId) => dispatch(upVoteCommentAction(commentId)),
    downVoteComment: (commentId) => dispatch(downVoteCommentAction(commentId)),
  };
}

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(CommentNonEditable))
