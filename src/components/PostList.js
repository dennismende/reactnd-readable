import React, { Component } from 'react';
import Post from './Post';
import {
  Button,
  Icon,
  Item,
  Menu,
} from 'semantic-ui-react';
import orderBy from 'lodash/orderBy';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openNewPostMenu as openNewPostMenuAction } from '../actions/appActions';

class PostList extends Component {
  state = {
    selectedSortingMethod: 'byDate'
  }

  handleSortingClick = (e, { name }) => this.setState({ selectedSortingMethod: name })

  getSortedPostsBySortingMethod = (posts, selectedSortingMethod) => {
    if (selectedSortingMethod === 'byDate') {
      return orderBy(posts, ['timestamp'], ['desc']);
    } else {
      return orderBy(posts, ['voteScore'], ['desc']);
    }
  }

  showAddNewPost = () => {
    const { openNewPostMenu } = this.props;
    openNewPostMenu();
  }

  render() {

    const { selectedSortingMethod } = this.state;
    const { posts, isNewPostMenuOpen } = this.props;
    let sortedPosts = this.getSortedPostsBySortingMethod(posts, selectedSortingMethod);

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
              <Button primary animated='vertical' onClick={this.showAddNewPost}>
                <Button.Content hidden >Add Post</Button.Content>
                <Button.Content visible>
                  <Icon name='add' />
                </Button.Content>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Item.Group>
          {isNewPostMenuOpen && (
            <Post
              isInEditMode={true}
            />
          )}

          {sortedPosts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </Item.Group>
      </div>
    );
  }
}

function mapStateToProps ({ appReducer: { isNewPostMenuOpen } }) {
  return {
    isNewPostMenuOpen,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    openNewPostMenu: () => dispatch(openNewPostMenuAction()),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList))
