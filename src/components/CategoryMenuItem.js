import React, { Component } from 'react';
import {
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class CategoryMenuItem extends Component {

  handleItemClick = (event, { name }) => {
    const { selectMenuItem } = this.props;

    selectMenuItem(name);
  }

  render() {
    const {activeItem} = this.props;

    return (
      <Menu.Item
        as={Link}
        to='/'
        name='All Posts'
        active={activeItem === 'All Posts'}
        onClick={this.handleItemClick}
      />
    );
  }
}

export default CategoryMenuItem;
