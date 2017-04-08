import React from 'react';

import Card from './card';

export default function List(props) {
  const cards = [];
  for (let i=0; i < props.cards.length; i++){
    cards.push(<Card text={props.cards[i]} />);
  }
   return (
        <div className="list" key="cards.id">
              {cards}
		        <form onSubmit={props.onAddSubmit}>
  			       <label>
    			         Name: 
    			       <input type="text" id="writings" onChange={props.onAddInputChanged} />
  			       </label>
  			         <input type="submit" value="Submit" />
		        </form>
        </div>
      );
  }

