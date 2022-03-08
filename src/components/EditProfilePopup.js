import React from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  //подписываемся на контекст пользователя
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(""); // управляемый инпут
  const [description, setDescription] = React.useState(""); // управляемый инпут
  const [nameDirty, setNameDirty] = React.useState(false); // использовали ли инпут или нет
  const [descriptionDirty, setDescriptionDirty ] = React.useState(false); // использовали ли инпут или нет
  const [nameError, setNameError] = React.useState('описание не может быть пустым'); // показывает ошибки
  const [descriptionError, setDescriptionError] = React.useState('имя не может быть пустым'); // показывает ошибки
  const [formValid, setFormValid] = React.useState(false)


  React.useEffect(() => {
    if (nameError || descriptionError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError, descriptionError])


  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name, // запись из ТЗ(позже разобраться...)
      about: description,
    });
  }
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  //Функция для изменения имени через поле ввода
  function handleUserName(event) {
    setName(event.target.value);
    if(event.target.value.length < 2 || event.target.value.length > 10) {
      setNameError('Значение должно быть более 2 символов и не более 10')
      if(!event.target.value) {
        setNameError('имя не может быть пустым')
      }
    } else {setNameError('')}
  }


  //Функция для изменения описания профиля через поле ввода
  function handleUserDescription(event) {
    setDescription(event.target.value);
    if(event.target.value.length < 2 || event.target.value.length > 10) {
      setDescriptionError('Значение должно быть более 2 символов и не более 10')
      if(!event.target.value) {
        setDescriptionError('описание не может быть пустым')
      }
    } else {setDescriptionError('')}
  }

  const blurHandler = (e) =>{
    switch (e.target.name) {
      case 'name':
        setNameDirty(true)
        break
      case 'job':
        setDescriptionDirty(true)
        break
    }
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      //isButtonActive={isButtonActive}

    >
      <label className="popup__label">
        <div className="form__field">
        {(nameDirty && nameError) && <div  style={{color:'red'}}> {nameError}</div>}
          <input
            onBlur={blurHandler}
            type="text"
            className="form__input form__input_type_name"
            name="name"
            id="name"
            placeholder="Введите ваши данные"
            onChange={handleUserName}
            minLength="2"
            maxLength="40"
            value={name || ''}
            required
            noValidate
          />
          <span className="form__error" id="name-error"></span>
        </div>
      </label>
      <label className="popup__label">
        <div className="form__field">
        {(descriptionDirty && descriptionError) && <div style={{color:'red'}}> {descriptionError}</div>}
          <input
            onBlur={blurHandler}
            type="text"
            className="form__input form__input_type_job"
            name="job"
            id="job"
            placeholder="вид деятельности"
            onChange={handleUserDescription}
            minLength="2"
            maxLength="200"
            value={description || ''}
            noValidate
            required
          />
          <span className="form__error" id="job-error"></span>
        </div>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
