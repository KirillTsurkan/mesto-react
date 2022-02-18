import React from 'react';
import api from '../utils/Api';
import Card from './Card';
function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserInformation()
      .then(result => {
        setUserName(result.name)
        setUserAvatar(result.avatar)
        setUserDescription(result.about)
      })

      .catch (error => {console.log(error)
      })
  }, []);


  React.useEffect(() => {
    api.getCards()
      .then(cards => {
        setCards(cards)
      })
      .catch(error => {
        console.log(error)
      })
  },[]);



  return (
    <main className="content">
      <section className="profile section content__section page__profile">
        <div
          onClick={props.onEditAvatar}
        className="profile__avatar-container">
          <div style={{backgroundImage: `url(${userAvatar})` }}   className="profile__avatar"></div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title page__title">{userName}</h1>
            <button
            onClick={props.onEditProfile}
            type="button" className="profile__edit-button"></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
        type="button" className="profile__add-button"></button>
      </section>
    <section className="cards section content__section">
      {cards.map((item) => {
        return (
          <Card card={item} key={item._id}
          onCardClick={props.onCardClick}
          />
        )
      })
    }
    </section>
    </main>
  )
}
export default Main
