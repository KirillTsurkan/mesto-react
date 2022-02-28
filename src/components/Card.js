import React from 'react';
import CurrentUserContext from './contexts/CurrentUserContext';

function Card(props) {
  // Подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);
  //console.log(currentUser);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `cards__remove ${isOwn ? 'cards__remove_show' : ''}`
  );


  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = props.card.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = `cards__like ${isLiked ? 'cards__like_aktive': ''}`;

  function handleCardClick() {
    props.onCardClick(props.card);
  }
  function handleLikeClick () {
    props.onCardLike(props.card)
  }
  function handleDeleteClick () {
    props.onCardDelete(props.card)
  }


  return (
    <div className="cards__item" >
        <img src={props.card.link} onClick={handleCardClick} alt={props.card.name} className="cards__photo"/>
        <div className="cards__description-container">
          <h3 className="cards__title">{props.card.name}</h3>
          <div className="cards__conteiner-likes">
            <button type="button" onClick={handleLikeClick} className={cardLikeButtonClassName}></button>
            <span className="cards__count-likes">{props.card.likes.length}</span>
          </div>
          <button type="button" onClick={handleDeleteClick}  className={cardDeleteButtonClassName}></button>
        </div>
      </div>
  )
}
export default Card
