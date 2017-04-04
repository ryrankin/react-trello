import React from 'react';

import ListContainer from './list-container';

export default class Board extends React.Component{
	render(props){
        return (
			<div className="board">
            <div className="title">{this.props.title}</div>
            <div className="lists">{this.props.lists}</div>
                <ListContainer />
                <ListContainer />
                <ListContainer />
            </div>
        );
    };
};