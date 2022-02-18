import React from 'react';

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="cards__item" >
        <img src={props.card.link} onClick={handleCardClick} alt={props.card.name} className="cards__photo"/>
        <div className="cards__description-container">
          <h3 className="cards__title">{props.card.name}</h3>
          <div className="cards__conteiner-likes">
            <button type="button" className="cards__like"></button>
            <span className="cards__count-likes">{props.card.likes.length}</span>
          </div>
          <button type="button"  className="cards__remove"></button>
        </div>
      </div>
  )
}
export default Card
