import React, { Component } from 'react';
import {
  Comment,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react';
import noImage from '../images/no-image.png';
import {
  addNewCommentToPost as addNewCommentToPostAction,
  updateComment as updateCommentAction,
} from '../actions/commentActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUUID } from '../utils/helper';

class CommentEditable extends Component {
  constructor(props) {
    super(props);

    const { comment } = props;

    if(comment) {
      this.state = {
        isNewComment: false,
        comment: {
          ...comment,
          timestamp: new Date().getTime(),
        }
      };
    } else {
      const newComment = this.createNewPost();

      this.state = {
        isNewComment: true,
        comment: newComment,
      };
    }
  }

  createNewPost = () => {
    const { match: { params: { post_id } } } = this.props;

    return {
      id: getUUID(),
      author: '',
      body: '',
      timestamp: new Date().getTime(),
      parentId: post_id,
    };
  }

  handleInputChange = (event) => {
    const { comment } = this.state;
    const { target } = event;

    this.setState({
      comment: {
        ...comment,
        [target.name]: target.value,
      }
    });
  }

  persistOrUpdateComment = () => {
    const { comment, isNewComment } = this.state;
    const { addNewCommentToPost, updateComment } = this.props;

    if(isNewComment) {
      addNewCommentToPost(comment);
    } else {
      updateComment(comment);
    }
  }

  render() {
    const { comment, isNewComment } = this.state;

    return (
      <React.Fragment>
        <Comment.Avatar src={noImage} />
        <Comment.Content>
          <Form>
            <Comment.Author>
              {isNewComment ? (
                <Input
                  placeholder='author'
                  name='author'
                  value={comment.author}
                  onChange={this.handleInputChange}
                />
              ) : (
                comment.author
              )}
            </Comment.Author>
            <Comment.Text>
              <TextArea
                placeholder='comment body'
                name='body'
                value={comment.body}
                onChange={this.handleInputChange}
              />
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action onClick={this.persistOrUpdateComment}>Save</Comment.Action>
            </Comment.Actions>
          </Form>
        </Comment.Content>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNewCommentToPost: (comment) => dispatch(addNewCommentToPostAction(comment)),
    updateComment: (comment) => dispatch(updateCommentAction(comment)),
  };
}

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(CommentEditable))
