import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup(props) {

  const avatarRef = React.useRef('');

// используем хук для хранения данных.
  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen])

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      title="Сменить Аватар"
      name="avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <div className="form__field">
          <input
            type="url"
            className="form__input form__input_type_avatar"
            name="avatar"
            id="avatar"
            ref={avatarRef}
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
