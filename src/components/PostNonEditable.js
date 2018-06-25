import React, { Component } from 'react';
import {
  Dropdown,
  Grid,
  Icon,
  Item,
  Label,
  Statistic,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import noImage from '../images/no-image.png';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { activateEditModeOfPost as activateEditModeOfPostAction } from '../actions/appActions';
import {
  deletePost as deletePostAction,
  upVotePost as upVotePostAction,
  downVotePost as downVotePostAction,
} from '../actions/postActions';

class PostNonEditable extends Component {
  state = {
    redirectAfterDeleteOfPostAtDetailPage: false,
  }

  onChangeToEditMode = () => {
    const { activateEditModeOfPost, post } = this.props;

    activateEditModeOfPost(post.id);
  }

  deletePost = () => {
    const { deletePost, post } = this.props;

    deletePost(post);
    this.setState({
      redirectAfterDeleteOfPostAtDetailPage: true,
    })
  }

  upVote = () => {
    const { upVotePost, post: { id: postId } } = this.props;

    upVotePost(postId);
  }

  downVote = () => {
    const { downVotePost, post: { id: postId } } = this.props;

    downVotePost(postId);
  }

  render() {
    const { redirectAfterDeleteOfPostAtDetailPage } = this.state;
    const { post } = this.props;
    const detailRoute = `/${post.category}/${post.id}`;

    if (redirectAfterDeleteOfPostAtDetailPage) {
      return <Redirect to='/' />;
    }

    return (
      <Item className='post'>

        <Label color='blue' ribbon>
          {post.category}
        </Label>

        <Item.Image size='tiny' src={noImage} />
        <Item.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={14}>
                <Link to={detailRoute}>
                  <Item.Header>{post.title}</Item.Header>
                </Link>
              </Grid.Column>
              <Grid.Column width={2} textAlign='right'>
                <Dropdown icon='ellipsis horizontal'>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={this.onChangeToEditMode}>edit post</Dropdown.Item>
                    <Dropdown.Item onClick={this.deletePost}>delete post</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Item.Meta>{post.author} at <Moment format='DD-MM-YYYY HH:mm'>{post.timestamp}</Moment></Item.Meta>
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
                    <Icon name='angle up' size='large' onClick={this.upVote} />
                    <Icon name='angle down' size='large' onClick={this.downVote} />
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
      </Item>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    activateEditModeOfPost: (post) => dispatch(activateEditModeOfPostAction(post)),
    deletePost: (postId) => dispatch(deletePostAction(postId)),
    upVotePost: (postId) => dispatch(upVotePostAction(postId)),
    downVotePost: (postId) => dispatch(downVotePostAction(postId)),
  };
}

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(PostNonEditable))
