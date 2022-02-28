import React from 'react';
import CurrentUserContext from './contexts/CurrentUserContext';
function EditAvatarPopup() {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <PopupWithForm
      title="Сменить Аватар"
      name="avatar"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllpopup}
    >
      <label className="popup__label">
        <div className="form__field">
          <input
            type="url"
            className="form__input form__input_type_avatar"
            name="avatar"
            id="avatar"
            defaultValue=""
            placeholder="Ссылка на изоображение"
            required
          />
          <span className="form__error" id="avatar-error"></span>
        </div>
      </label>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
