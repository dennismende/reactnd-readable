import React, { Component } from 'react';
import {
  Button,
  Dropdown,
  Form,
  Grid,
  Input,
  Item,
  Label,
  TextArea,
} from 'semantic-ui-react';
import noImage from '../images/no-image.png';
import { getUUID } from '../utils/helper';
import {
  createPost as createPostAction,
  updatePost as updatePostAction,
} from '../actions/postActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class PostEditable extends Component {
  constructor(props) {
    super(props);

    const { post } = props;

    if(post) {
      this.state = {
        isNewPost: false,
        post: {
          ...post,
          timestamp: new Date().getTime(),
        }
      };
    } else {
      const newPost = this.createNewPost();

      this.state = {
        isNewPost: true,
        post: newPost,
      };
    }
  }

  createNewPost = () => {
    return {
      id: getUUID(),
      author: '',
      body: '',
      title: '',
      timestamp: new Date().getTime(),
      category: 'react',
    };
  }

  handleInputChange = (event) => {
    const { post } = this.state;
    const { target } = event;

    this.setState({
      post: {
        ...post,
        [target.name]: target.value,
      }
    });
  }

  persistOrUpdatePost = () => {
    const { post, isNewPost } = this.state;
    const { createPost, updatePost } = this.props;

    if(isNewPost) {
      createPost(post);
    } else {
      updatePost(post);
    }
  }

  render() {
    const { post, isNewPost } = this.state;

    return (
      <Item className='post'>

        <Label color='blue' ribbon>
          {post.category}
        </Label>

        <Item.Image size='tiny' src={noImage} />
        <Item.Content>
          <Form>
            <Grid>
              <Grid.Row>
                <Grid.Column width={14}>
                  <Item.Header as='a'>
                    <Input
                      placeholder='title'
                      value={post.title}
                      onChange={this.handleInputChange}
                      name='title'
                    />
                  </Item.Header>
                </Grid.Column>
                <Grid.Column width={2} textAlign='right'>
                  <Dropdown icon='ellipsis horizontal'>
                    <Dropdown.Menu>
                      <Dropdown.Item>delete post</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Item.Meta>
              {isNewPost ? (
                <Input
                  placeholder='author'
                  name='author'
                  value={post.author}
                  onChange={this.handleInputChange}
                />
              ) : (
                post.author
              )}

              <select value={post.category} onChange={this.handleInputChange} name='category'>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </select>
            </Item.Meta>
            <Item.Description>
              <TextArea
                placeholder='post body'
                name='body'
                value={post.body}
                onChange={this.handleInputChange}
              />
            </Item.Description>
            <Item.Extra>

              <hr></hr>

              <Grid>
                <Grid.Row className='post_extra_grid' verticalAlign='middle'>
                  <Grid.Column textAlign='right'>
                    <Button primary onClick={this.persistOrUpdatePost}>save changes</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Item.Extra>
          </Form>
        </Item.Content>
      </Item>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createPost: (post) => dispatch(createPostAction(post)),
    updatePost: (post) => dispatch(updatePostAction(post)),
  };
}

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(PostEditable))
