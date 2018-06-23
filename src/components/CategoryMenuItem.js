import React, { Component } from 'react';
import {
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchPostsOfSelectedCategory as fetchPostsOfSelectedCategoryAction,
  fetchPosts as fetchPostsAction
} from '../actions/postActions';

class CategoryMenuItem extends Component {

  handleItemClick = (event, { name }) => {
    const { selectMenuItem, fetchPostsOfSelectedCategory, fetchPosts } = this.props;
    const categoryPath = this.getCategoryPath(name);

    selectMenuItem(name);

    if(categoryPath === '/') {
      fetchPosts();
    } else {
      fetchPostsOfSelectedCategory(categoryPath);
    }
  }

  getCategoryPath = (categoryName) => categoryName === 'All Posts' ? '/' : `/${categoryName}`

  render() {
    const { activeItem, name } = this.props;
    const categoryPath = this.getCategoryPath(name);

    return (
      <Menu.Item
        as={Link}
        to={categoryPath}
        name={name}
        active={activeItem === name}
        onClick={this.handleItemClick}
      />
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPostsOfSelectedCategory: categoryPath => dispatch(fetchPostsOfSelectedCategoryAction(categoryPath)),
    fetchPosts: () => dispatch(fetchPostsAction()),
  };
}

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CategoryMenuItem))
