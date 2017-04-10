import React from 'react';
import ListContainer from './list-container';

export default class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      lists: ['Most Important ', 'Wishful Thinking', 'When Pigs Fly'],
      title: this.props.title
    };
  }
  render() {
    return (
      <div className='card-board'>
        <h2 className='board-title'>{this.state.title}</h2>
          {this.state.lists.map( (title, index) => <ListContainer title={title} key={index} index={index} /> )}
      </div>
    )
  }

}