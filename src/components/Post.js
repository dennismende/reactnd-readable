import React, { Component } from 'react';
import {
  Item,
  Label,
} from 'semantic-ui-react';
import noImage from '../images/no-image.png';
import PostNonEditable from './PostNonEditable';
import PostEditable from './PostEditable';

class Post extends Component {
  state = {
    inEditMode: false
  }

  changeMode = (inEditMode) => {
    this.setState(() => ({
      inEditMode,
    }));
  }

  render() {
    const { inEditMode } = this.state;
    const { post } = this.props;

    return (
      <Item className='post'>

        <Label color='blue' ribbon>
          {post.category}
        </Label>

        <Item.Image size='tiny' src={noImage} />

        {inEditMode ? (
          <PostEditable
            post={post}
          />
        ) : (
          <PostNonEditable
            post={post}
            changeMode={this.changeMode}
          />
        )}
      </Item>
    );
  }
}

export default Post;
