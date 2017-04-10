import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			enteredText : '',
			cardList : []
		};

		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}
	
	onAddInputChanged(event){
    console.log('onAddInputChanged', event.target.value);
    let newState = event.target.value;
    this.setState({
        enteredText: newState
    	})
	}
	
	onAddSubmit(event){
    event.preventDefault();
    let newText = this.state.enteredText;
    let newList = this.state.cardList;
    newList.push(newText);
    this.setState({
    	cardList: newList
    })
}
	
	render(){
		return(
			<div className='list-container'>
				<List
					title={this.props.title}
					cards={this.state.cardList}
					onAddInputChanged={this.onAddInputChanged}
					onAddSubmit={this.onAddSubmit}
					index={this.props.index}
					/>
			</div>
			)
		}
	}