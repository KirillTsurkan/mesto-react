import React from 'react';
import '../index.css';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from './contexts/CurrentUserContext';
import api from '../utils/Api';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });
  const [currentUser, setCurrentUser ] = React.useState({})
  const [cards, setCards] = React.useState([])

// запрос API получение информации о пользователе
  React.useEffect(() => {
    api.getUserInformation()
      .then(result => {
        setCurrentUser(result)
      })
      .catch (error => {console.log(error)
      })
  }, []);


//обработчики попапов
  function handleEditAvatarClick()  {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
// закрытие попапов
  function closeAllpopup() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({ link: '', name: '' });
  }


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

//запрос API получение карточек с сервера.
  React.useEffect(() => {
    api.getCards()
      .then(cards => {
        setCards(cards)
      })
      .catch(error => {
        console.log(error)
      })
  },[]);

// функция удаления карточек, запрос API.
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter(item => item._id !== card._id));
      })
      .catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />

        <Footer />

        <PopupWithForm title = 'Редактировать профиль' name='profile' isOpen={isEditProfilePopupOpen} onClose={closeAllpopup}>
          <label className="popup__label">
          <div className="form__field">
            <input type="text" className="form__input form__input_type_name" name="name" id="name" placeholder="Введите ваши данные" minLength="2" maxLength="40" required/>
            <span className="form__error" id="name-error"></span>
          </div>
        </label>
        <label className="popup__label">
          <div className="form__field">
            <input type="text" className="form__input form__input_type_job" name="job" id="job" placeholder="вид деятельности" minLength="2" maxLength="200" required/>
            <span className="form__error" id="job-error"></span>
          </div>
        </label>
        </PopupWithForm>

        <PopupWithForm title = 'Сменить Аватар' name='avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllpopup}>
          <label className="popup__label">
          <div className="form__field">
            <input type="url" className="form__input form__input_type_avatar" name="avatar" id="avatar" defaultValue="" placeholder="Ссылка на изоображение" required/>
            <span className="form__error" id="avatar-error"></span>
          </div>
        </label>
        </PopupWithForm>
        <PopupWithForm title = 'Добавить Место' name='place' isOpen={isAddPlacePopupOpen} onClose={closeAllpopup}>
          <label className="popup__label">
          <div className="form__field">
            <input type="text" className="form__input form__input_type_place" name="place"  id="place" defaultValue="" placeholder="название" minLength="2" maxLength="30" required/>
            <span className="form__error" id="place-error"></span>
          </div>
      </label>
      <label className="popup__label">
        <div className="form__field">
          <input type="url" className="form__input form__input_type_link" name="link" id="link" defaultValue="" placeholder="ссылка на картинку" required/>
          <span className="form__error" id="link-error"></span>
          </div>
      </label>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllpopup}/>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
