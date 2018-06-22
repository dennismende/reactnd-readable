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
    const { activeItem, name } = this.props;

    return (
      <Menu.Item
        as={Link}
        to='/'
        name={name}
        active={activeItem === name}
        onClick={this.handleItemClick}
      />
    );
  }
}

export default CategoryMenuItem;
