import React, { Component } from 'react';
import Post from './Post';
import {
  Button,
  Icon,
  Item,
  Menu,
} from 'semantic-ui-react';

class PostList extends Component {
  state = {
    selectedSortingMethod: 'byDate'
  }

  handleSortingClick = (e, { name }) => this.setState({ selectedSortingMethod: name })

  render() {

    const { selectedSortingMethod } = this.state;

    return (
      <div>
        <Menu text>
          <Menu.Item header>Sort By</Menu.Item>
          <Menu.Item
            name='byDate'
            active={selectedSortingMethod === 'byDate'}
            onClick={this.handleSortingClick}
          />
          <Menu.Item
            name='byScore'
            active={selectedSortingMethod === 'byScore'}
            onClick={this.handleSortingClick}
          />

          <Menu.Menu position='right'>
            <Menu.Item>
              <Button primary animated='vertical'>
                <Button.Content hidden>Add Post</Button.Content>
                <Button.Content visible>
                  <Icon name='add' />
                </Button.Content>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Item.Group>
          <Post />
          <Post />
        </Item.Group>
      </div>
    );
  }
}

export default PostList;
