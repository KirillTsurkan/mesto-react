import React from 'react';
import Card from './Card';
import CurrentUserContext from './contexts/CurrentUserContext';


function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
      <main className="content">
        <section className="profile section content__section page__profile">
          <div
            onClick={props.onEditAvatar}
          className="profile__avatar-container">
            <img src={`${currentUser.avatar}`}   className="profile__avatar"></img>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__title page__title">{currentUser.name}</h1>
              <button
              onClick={props.onEditProfile}
              type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button
            onClick={props.onAddPlace}
          type="button" className="profile__add-button"></button>
        </section>
      <section className="cards section content__section">
        {props.cards.map((item) => {
          return (
            <Card
            card={item}
            key={item._id}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            />
          )
        })
      }
      </section>
      </main>

  )
}
export default Main
