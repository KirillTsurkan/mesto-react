import React, { useEffect, useState, useContext } from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  //контекст пользователя
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  //Функция для изменения имени через поле ввода
  function handleUserName(event) {
    setName(event.target.value)
  }

  //Функция для изменения описания профиля через поле ввода
  function handleUserDescription(event) {
    setDescription(event.target.value)
  }


  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <div className="form__field">
          <input
            type="text"
            className="form__input form__input_type_name"
            name="name"
            id="name"
            placeholder="Введите ваши данные"
            onChange={handleUserName}
            minLength="2"
            maxLength="40"
            value={name ? name : ''}
            required
          />
          <span className="form__error" id="name-error"></span>
        </div>
      </label>
      <label className="popup__label">
        <div className="form__field">
          <input
            type="text"
            className="form__input form__input_type_job"
            name="job"
            id="job"
            placeholder="вид деятельности"
            onChange={handleUserDescription}
            minLength="2"
            maxLength="200"
            value={description ? description : ''}
            required
          />
          <span className="form__error" id="job-error"></span>
        </div>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
