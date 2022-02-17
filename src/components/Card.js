import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div class="cards__item" >
        <img src={props.card.link} onClick={handleClick} alt={props.card.name} class="cards__photo"/>
        <div class="cards__description-container">
          <h3 class="cards__title">{props.card.name}</h3>
          <div class="cards__conteiner-likes">
            <button type="button" class="cards__like"></button>
            <span class="cards__count-likes">{props.card.likes.length}</span>
          </div>
          <button type="button"  class="cards__remove"></button>
        </div>
      </div>
  )
}
export default Card
