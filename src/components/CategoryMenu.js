import React, { Component } from 'react';
import {
  Header,
  Menu,
} from 'semantic-ui-react';
import CategoryMenuItem from './CategoryMenuItem';

class CategoryMenu extends Component {

  state = {
    activeItem: 'All Posts',
  }

  selectMenuItem = (selectedItem) => this.setState({ activeItem: selectedItem })

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Header as='h3' textAlign='center'>Category Overview</Header>

        <Menu fluid vertical tabular>
          <CategoryMenuItem
            activeItem={activeItem}
            selectMenuItem={this.selectMenuItem}
          />
        </Menu>
      </React.Fragment>
    );
  }
}

export default CategoryMenu;
