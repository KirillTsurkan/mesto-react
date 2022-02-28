import React from 'react';
function ImagePopup(props) {
  return (
    <div className={`popup popup_type_size-image ${props.card.link ? "popup_opened" : ''}`}>
      <div className="popup__container popup__container_type_size-image">
        <img src={props.card.link} alt={props.card.name} className="popup__photo"/>
        <h3 className="popup__photo-caption">{props.card.name}</h3>
        <button type="button"
        onClick={props.onClose}
        className="popup__close-button popup__close-button_size_image"></button>
      </div>
    </div>
  )
}
export default ImagePopup;
