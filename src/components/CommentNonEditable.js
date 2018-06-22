import React, { Component } from 'react';
import {
  Comment,
  Icon,
  Statistic,
} from 'semantic-ui-react';
import noImage from '../images/no-image.png';

class CommentNonEditable extends Component {
  onChangeToEditMode = () => {
    const { changeMode } = this.props;

    changeMode(true);
  }

  render() {
    return (
      <React.Fragment>
        <Comment.Avatar src={noImage} />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>
          <Comment.Actions>
            <Comment.Action>
              <Statistic size='mini'>
                <Statistic.Value>
                  <Icon name='heart outline' size='small' />
                  5
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
