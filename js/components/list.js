import React from 'react';

import Card from './card';

export default function List(props) {
   return (
        <div className='card-list'>
          <h3 className='list-title'>{props.title}</h3>
          <section className='list-cards'>
            {props.cards.map((card, index) => <Card text={card} key={index} />)}
          </section>
          <form>
            <label htmlFor={`newCard_${props.index}`}>New card Text</label>
            <input id={`newCard_${props.index}`} name="cardText" onChange={props.onAddInputChanged} />
            <button type="submit" onClick={props.onAddSubmit}> Submit Card </button>
          </form>
        </div>
      )
    }