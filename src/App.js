import React, { Component } from 'react';
import {
  Grid,
  Header,
  Menu,
} from 'semantic-ui-react';
import './App.css';
import PostList from './components/PostList';

class App extends Component {
  state = {
    activeItem: 'All Posts',
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div className="App">
        <Header as='h1' textAlign='center'>Reactnd Readable</Header>

        <Grid padded>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as='h3' textAlign='center'>Category Overview</Header>

              <Menu fluid vertical tabular>
                <Menu.Item
                  name='All Posts'
                  active={activeItem === 'All Posts'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='companies'
                  active={activeItem === 'companies'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='links'
                  active={activeItem === 'links'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column width={11}>
              <PostList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
