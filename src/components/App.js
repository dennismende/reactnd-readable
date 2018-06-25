import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Grid,
  Header,
} from 'semantic-ui-react';
import PostList from './PostList';
import PostDetails from './PostDetails';
import CategoryMenu from './CategoryMenu';
import PageNotAvailable from './PageNotAvailable';
import { fetchCategories as fetchCategoriesAction } from '../actions/categoryActions';
import { fetchPosts as fetchPostsAction } from '../actions/postActions';
import { connect } from 'react-redux';
import { withRouter, Switch } from 'react-router-dom';
class App extends Component {

  componentDidMount() {
    const { fetchCategories, fetchPosts } = this.props;

    fetchCategories();
    fetchPosts();
  }

  render() {
    const { categories, posts } = this.props;

    return (
      <div className="App">
        <Header as='h1' textAlign='center'>Reactnd Readable</Header>

        <Grid padded>
          <Grid.Row>
            <Grid.Column width={3}>
              <CategoryMenu
                categories={categories}
              />
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column width={11}>
              <Switch>
                <Route
                  path='/page-not-found'
                  component={PageNotAvailable}
                />
                <Route
                  exact path='/:filter?'
                  render={props => (
                    <PostList posts={posts} {...props} />
                  )}
                />
                <Route
                  path='/:category/:post_id'
                  component={PostDetails}
                />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps ({ categoryReducer: { categories }, postReducer: { posts } }) {
  return {
    categories,
    posts,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategoriesAction()),
    fetchPosts: () => dispatch(fetchPostsAction()),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
