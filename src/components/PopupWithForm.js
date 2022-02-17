

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened': ''}`}>
      <div className="popup__container">
        <h3 className="popup__title page__title">{props.title}</h3>
        <form className="form form_type_profile" name={props.name} method="POST" novalidate>
          {/* <label className="popup__label">
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
          </label> */}
          {props.children}
          <button type="submit" className="form__save-button form__save-button_type_profile">Сохранить</button>
        </form>
        <button type="button" onClick={props.onClose}className="popup__close-button popup__close-button_type_profile"></button>
      </div>
    </div>
  )
}

export default PopupWithForm
