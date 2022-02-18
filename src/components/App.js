import React from 'react';
import '../index.css';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });
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

  function closeAllpopup() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({ link: '', name: '' });
  }



  return (
    <div className="page__container">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
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
  );
}

export default App;
