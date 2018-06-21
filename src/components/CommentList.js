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

    return (
      <React.Fragment>
        <SemanticComment.Group>
          <Header as='h3' dividing>
            Comments
          </Header>

          <Comment />

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
