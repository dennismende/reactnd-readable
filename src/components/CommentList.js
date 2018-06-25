import React, { Component } from 'react';
import {
  Button,
  Comment as SemanticComment,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openNewCommentMenu as openNewCommentMenuAction } from '../actions/appActions';

class CommentList extends Component {

  showAddNewComment = () => {
    const { openNewCommentMenu } = this.props;
    openNewCommentMenu();
  }

  render() {
    const { comments, isNewCommentMenuOpen } = this.props;

    return (
      <React.Fragment>
        <SemanticComment.Group>
          <Header as='h3' dividing>
            Comments
          </Header>

          {comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
            />
          ))}

          {isNewCommentMenuOpen && (
            <Comment
              inEditMode={true}
            />
          )}

          {!isNewCommentMenuOpen && (
            <Container textAlign='center'>
              <Button circular icon primary onClick={this.showAddNewComment}>
                <Icon name='add' />
              </Button>
            </Container>
          )}
        </SemanticComment.Group>
      </React.Fragment>
    );
  }
}

function mapStateToProps ({ appReducer: { isNewCommentMenuOpen } }) {
  return {
    isNewCommentMenuOpen,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    openNewCommentMenu: () => dispatch(openNewCommentMenuAction()),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentList))
