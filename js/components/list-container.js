import React from 'react';

import List from './list';
import Card from './card';

export default class ListContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			enteredText : '',
			cards : []
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
	}
	
	onAddInputChanged(event){
    console.log('onAddInputChanged');
    this.setState({
        enteredText: event.target.value
    	});
	}
	
	onAddSubmit(event){
    event.preventDefault();
    console.log('onAddSubmit');
    this.state.cards.push(this.state.enteredText);
	}
	
	render(){
		return(
			<List cards={this.state.cards}
				onAddInputChanged={this.onAddInputChanged.bind(this)}onAddSubmit={this.onAddSubmit.bind(this)} />
			);
		}
	}