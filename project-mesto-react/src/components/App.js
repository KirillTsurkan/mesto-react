import React from 'react';
import '../index.css';
import logo from '../images/mesto_logo.svg';

function App() {
  return (
    <div className="page__container">
      <header className="header section page__header">
        <img className="header__logo" src={logo} alt="логотип mesto"/>
    </header>
    <main className="content">
      <section className="profile section content__section page__profile">
        <div className="profile__avatar-container">
          <img src="<%=require('./images/kusto.png')%>" alt="Жак-Ив Кусто" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title page__title">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button"></button>
          </div>
          <p className="profile__description"> Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-button"></button>
      </section>
    <section className="cards section content__section">

    </section>
    </main>
    <footer className="footer">
      <address className="footer__copyright"> &copy; 2021 Mesto Russia</address>
    </footer>
    <div className="popup popup_type_profile">
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
    </div>
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
