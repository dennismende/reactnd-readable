import React, { Component } from 'react';
import {
  Button,
  Dropdown,
  Form,
  Grid,
  Input,
  Item,
  TextArea,
} from 'semantic-ui-react';

class PostEditable extends Component {
  render() {
    const { post } = this.props;

    return (
      <React.Fragment>
        <Item.Content>
          <Form>
            <Grid>
              <Grid.Row>
                <Grid.Column width={14}>
                  <Item.Header as='a'><Input placeholder='title' value={post.title} /></Item.Header>
                </Grid.Column>
                <Grid.Column width={2} textAlign='right'>
                  <Dropdown icon='ellipsis horizontal'>
                    <Dropdown.Menu>
                      <Dropdown.Item>delete post</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Item.Description>
              <TextArea placeholder='post body' value={post.body} />
            </Item.Description>
            <Item.Extra>

              <hr></hr>

              <Grid>
                <Grid.Row className='post_extra_grid' verticalAlign='middle'>
                  <Grid.Column textAlign='right'>
                    <Button primary>save changes</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Item.Extra>
          </Form>
        </Item.Content>
      </React.Fragment>
    );
  }
}

export default PostEditable;
