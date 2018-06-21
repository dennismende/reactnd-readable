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

    return (
      <Item className='post'>

        <Label color='blue' ribbon>
          category
        </Label>

        <Item.Image size='tiny' src={noImage} />

        {inEditMode ? (
          <PostEditable />
        ) : (
          <PostNonEditable changeMode={this.changeMode} />
        )}
      </Item>
    );
  }
}

export default Post;
