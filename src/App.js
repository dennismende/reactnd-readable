import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Grid,
  Header,
} from 'semantic-ui-react';
import './App.css';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import CategoryMenu from './components/CategoryMenu';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header as='h1' textAlign='center'>Reactnd Readable</Header>

        <Grid padded>
          <Grid.Row>
            <Grid.Column width={3}>
              <CategoryMenu />
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column width={11}>
              <Route exact path="/" render={() => (
                <PostList />
              )}/>
              <Route path="/:category/:post_id" render={() => (
                <PostDetails />
              )}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
