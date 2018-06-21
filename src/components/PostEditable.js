import React, { Component } from 'react';
import {
  Button,
  Dropdown,
  Grid,
  Item,
} from 'semantic-ui-react';

class PostEditable extends Component {
  render() {

    return (
      <React.Fragment>
        <Item.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={14}>
                <Item.Header as='a'>title</Item.Header>
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

          <Item.Meta>author at timestamp</Item.Meta>
          <Item.Description>
            post body
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
        </Item.Content>
      </React.Fragment>
    );
  }
}

export default PostEditable;
