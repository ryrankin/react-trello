import React from 'react';

import List from './list';
import Card from './card';

export default class ListContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			enteredText: '',
			cards: [],
		};
	}
	
	onAddInputChanged(state){
    console.log('onAddInputChanged');
    this.setState({
        enteredText: document.getElementById("writings").value
    	});
	}
	
	onAddSubmit(event){
    event.preventDefault();
    this.state.cards.push(this.state.enteredText);
	}
	
	render(){
		return(
			<List cards={this.state.cards}
				onAddInputChanged={this.onAddInputChanged} 
				onAddSubmit={this.onAddSubmit} />
			);
		}
	}