import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [cardTitle, setCardTitle] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');


//Обработчик установки названия места
function handleCardTitle(event) {
  setCardTitle(event.target.value)
}

//Обработчик установки картинки (ссылки на картинку)
function handleCardLink(event) {
  setCardLink(event.target.value)
}


  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name: cardTitle,
      link: cardLink,
    });
  }
// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setCardLink('')
    setCardTitle('')
  }, [props.isOpen])

  return (
    <PopupWithForm
      title="Добавить Место"
      name="place"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}

    >
      <label className="popup__label">
        <div className="form__field">
          <input
            type="text"
            className="form__input form__input_type_place"
            name="place"
            id="place"
            placeholder="название"
            minLength="2"
            maxLength="30"
            onChange={handleCardTitle}
            value={cardTitle || ''}
            required
          />
          <span className="form__error" id="place-error"></span>
        </div>
      </label>
      <label className="popup__label">
        <div className="form__field">
          <input
            type="url"
            className="form__input form__input_type_link"
            name="link"
            id="link"
            placeholder="ссылка на картинку"
            onChange={handleCardLink}
            value={cardLink || ''}
            required
          />
          <span className="form__error" id="link-error"></span>
        </div>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
