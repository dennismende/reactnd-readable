import React, { Component } from 'react';
import {
  Button,
  Comment as SemanticComment,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';
import Comment from './Comment';

class CommentList extends Component {

  render() {
    const { comments } = this.props;

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

          <Container textAlign='center'>
            <Button circular icon primary>
              <Icon name='add' />
            </Button>
          </Container>
        </SemanticComment.Group>
      </React.Fragment>
    );
  }
}

export default CommentList;
