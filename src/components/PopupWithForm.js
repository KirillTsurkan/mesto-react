

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened': ''}`}>
      <div className="popup__container">
        <h3 className="popup__title page__title">{props.title}</h3>
        <form className="form form_type_profile" name={props.name} method="POST" noValidate>
          {props.children}
          <button type="submit" className="form__save-button form__save-button_type_profile">Сохранить</button>
        </form>
        <button type="button" onClick={props.onClose}className="popup__close-button popup__close-button_type_profile"></button>
      </div>
    </div>
  )
}

export default PopupWithForm
