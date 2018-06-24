import React, { Component } from 'react';
import {
  Comment,
  Icon,
  Statistic,
} from 'semantic-ui-react';
import noImage from '../images/no-image.png';
import Moment from 'react-moment';

class CommentNonEditable extends Component {
  onChangeToEditMode = () => {
    const { changeMode } = this.props;

    changeMode(true);
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
                <Icon name='angle up' size='large' />
                <Icon name='angle down' size='large' />
              </span>
            </Comment.Action>
            <Comment.Action onClick={this.onChangeToEditMode}>Edit</Comment.Action>
            <Comment.Action>Delete</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </React.Fragment>
    );
  }
}

export default CommentNonEditable;
