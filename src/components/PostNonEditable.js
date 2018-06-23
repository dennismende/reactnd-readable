import React, { Component } from 'react';
import {
  Dropdown,
  Grid,
  Icon,
  Item,
  Statistic,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PostNonEditable extends Component {

  onChangeToEditMode = () => {
    const { changeMode } = this.props;

    changeMode(true);
  }

  render() {
    const { post } = this.props;

    return (
      <React.Fragment>
        <Item.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={14}>
                <Link to="/1/2">
                  <Item.Header>{post.title}</Item.Header>
                </Link>
              </Grid.Column>
              <Grid.Column width={2} textAlign='right'>
                <Dropdown icon='ellipsis horizontal'>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={this.onChangeToEditMode}>edit post</Dropdown.Item>
                    <Dropdown.Item>delete post</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Item.Meta>{post.author} at {post.timestamp}</Item.Meta>
          <Item.Description>
            {post.body}
          </Item.Description>
          <Item.Extra>

            <hr></hr>

            <Grid>
              <Grid.Row className='post_extra_grid' verticalAlign='middle'>
                <Grid.Column width={5} textAlign='left'>
                  <Statistic size='tiny'>
                    <Statistic.Value>
                      <Icon name='heart outline' size='small' />
                      {post.voteScore}
                    </Statistic.Value>
                  </Statistic>
                  <span>
                    <Icon name='angle up' size='large' />
                    <Icon name='angle down' size='large' />
                  </span>
                </Grid.Column>
                <Grid.Column width={11} textAlign='right'>
                  <Statistic size='tiny'>
                    <Statistic.Value>
                      <Icon name='comments outline' size='small' />
                      {post.commentCount}
                    </Statistic.Value>
                  </Statistic>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Item.Extra>
        </Item.Content>
      </React.Fragment>
    );
  }
}

export default PostNonEditable;
