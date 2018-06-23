import React, { Component } from 'react';
import {
  Header,
  Menu,
} from 'semantic-ui-react';
import CategoryMenuItem from './CategoryMenuItem';
import { fetchCategories as fetchCategoriesAction } from '../actions/categoryActions';
import { fetchPosts as fetchPostsAction } from '../actions/postActions';
import { connect } from 'react-redux';

class CategoryMenu extends Component {

  state = {
    activeItem: 'All Posts',
  }

  componentDidMount() {
    const { fetchCategories, fetchPosts } = this.props;

    fetchCategories();
    fetchPosts();
  }

  selectMenuItem = (selectedItem) => this.setState({ activeItem: selectedItem })

  render() {
    const { activeItem } = this.state;
    const { categories } = this.props;

    return (
      <React.Fragment>
        <Header as='h3' textAlign='center'>Category Overview</Header>

        <Menu fluid vertical tabular>
          <CategoryMenuItem
            name='All Posts'
            activeItem={activeItem}
            selectMenuItem={this.selectMenuItem}
          />
          {categories.map(category => (
            <CategoryMenuItem
              key={category.name}
              name={category.name}
              activeItem={activeItem}
              selectMenuItem={this.selectMenuItem}
            />
          ))}
        </Menu>
      </React.Fragment>
    );
  }
}

function mapStateToProps ({ categoryReducer: { categories } }) {
  return {
    categories,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategoriesAction()),
    fetchPosts: () => dispatch(fetchPostsAction()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryMenu)
