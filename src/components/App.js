import React from 'react';
import '../index.css';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';

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
          <input type="text" className="form__input form__input_type_name" name="name" id="name" placeholder="Введите ваши данные" minLength="2" maxlength="40" required/>
          <span className="form__error" id="name-error"></span>
        </div>
      </label>
      <label className="popup__label">
        <div className="form__field">
          <input type="text" className="form__input form__input_type_job" name="job" id="job" placeholder="вид деятельности" minlength="2" maxlength="200" required/>
          <span className="form__error" id="job-error"></span>
        </div>
      </label>
      </PopupWithForm>

      <PopupWithForm title = 'Сменить Аватар' name='avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllpopup}>
        <label className="popup__label">
        <div className="form__field">
          <input type="url" className="form__input form__input_type_avatar" name="avatar" id="avatar" value="" placeholder="Ссылка на изоображение" required/>
          <span className="form__error" id="avatar-error"></span>
        </div>
      </label>
      </PopupWithForm>
      <PopupWithForm title = 'Добавить Место' name='place' isOpen={isAddPlacePopupOpen} onClose={closeAllpopup}>
        <label className="popup__label">
        <div className="form__field">
          <input type="text" className="form__input form__input_type_place" name="place"  id="place" value="" placeholder="название" minlength="2" maxlength="30" required/>
          <span className="form__error" id="place-error"></span>
        </div>
    </label>
    <label className="popup__label">
      <div className="form__field">
        <input type="url" className="form__input form__input_type_link" name="link" id="link" value="" placeholder="ссылка на картинку" required/>
        <span className="form__error" id="link-error"></span>
        </div>
    </label>
    </PopupWithForm>



      <ImagePopup card={selectedCard} onClose={closeAllpopup}/>
    {/* <div className="popup popup_type_profile">
      <div className="popup__container">
        <h3 className="popup__title page__title">Редактировать профиль</h3>
        <form className="form form_type_profile" name="forma" method="POST" novalidate>
          <label className="popup__label">
            <div className="form__field">
              <input type="text" className="form__input form__input_type_name" name="name" id="name" value="" placeholder="Введите ваши данные" minlength="2" maxlength="40" required/>
              <span className="form__error" id="name-error"></span>
            </div>
          </label>
          <label className="popup__label">
            <div className="form__field">
              <input type="text" className="form__input form__input_type_job" name="job" id="job" value="" placeholder="вид деятельности" minlength="2" maxlength="200" required/>
              <span className="form__error" id="job-error"></span>
            </div>
          </label>
          <button type="submit" className="form__save-button form__save-button_type_profile">Сохранить</button>
        </form>
        <button type="button" className="popup__close-button popup__close-button_type_profile"></button>
      </div>
    </div>

    <div className="popup popup_type_avatar">
      <div className="popup__container">
        <h3 className="popup__title page__title">Обновить аватар</h3>
        <form className="form form_type_avatar" name="form-avatar" novalidate>
          <label className="popup__label">
            <div className="form__field">
              <input type="url" className="form__input form__input_type_avatar" name="avatar" id="avatar" value="" placeholder="Ссылка на изоображение" required/>
              <span className="form__error" id="avatar-error"></span>
            </div>
          </label>
          <button type="submit" className="form__save-button form__save-button_type_avatar">Сохранить</button>
        </form>
        <button type="button" className="popup__close-button popup__close-button_type_avatar"></button>
      </div>
    </div>

    <div className="popup popup_type_confirm">
      <div className="popup__container">
        <form className="form form_type_confirm" name="confirm" action="#" novalidate>
          <h3 className="popup__title page__title">Вы уверены?</h3>
          <button type="submit" className="form__save-button form__save-button_type_submit-card ">Да</button>
        </form>
        <button type="button" className="popup__close-button"></button>
      </div>
    </div>
    <div className="popup popup_type_size-image">
      <div className="popup__container popup__container_type_size-image">
        <img src="#" alt="#" className="popup__photo"/>
        <h3 className="popup__photo-caption"></h3>
        <button type="button" className="popup__close-button popup__close-button_size_image"></button>
      </div>
    </div>
    <div className="popup popup_type_image">
      <div className="popup__container">
        <h3 className="popup__title page__title">Новое Место</h3>
        <form className="form form_save-photo" name="form_save-photo" method="POST" novalidate>
          <label className="popup__label">
            <div className="form__field">
              <input type="text" className="form__input form__input_type_place" name="place"  id="place" value="" placeholder="название" minlength="2" maxlength="30" required/>
              <span className="form__error" id="place-error"></span>
            </div>
        </label>
        <label className="popup__label">
          <div className="form__field">
            <input type="url" className="form__input form__input_type_link" name="link" id="link" value="" placeholder="ссылка на картинку" required/>
            <span className="form__error" id="link-error"></span>
            </div>
        </label>
          <button type="submit" className="form__save-button form__save-button_type_image">Создать</button>
        </form>
        <button type="button" className="popup__close-button popup__close-button-card"></button>
      </div>
    </div>*/}
  </div>
  // <template className="template">
  //   <div className="cards__item">
  //     <img src=" " alt=" " className="cards__photo"/>
  //     <div className="cards__description-container">
  //       <h3 className="cards__title"></h3>
  //       <div className="cards__conteiner-likes">
  //         <button type="button" className="cards__like"></button>
  //         <span className="cards__count-likes">100</span>
  //       </div>
  //       <button type="button" className="cards__remove"></button>
  //     </div>
  //   </div>
  // </template>
  );
}

export default App;
