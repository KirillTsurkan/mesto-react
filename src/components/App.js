import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "./contexts/CurrentUserContext";
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    link: "",
    name: "",
  });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  // запрос API получение информации о пользователе
  React.useEffect(() => {
    api
      .getUserInformation()
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // запрос API изменение аватара.
  function handleUpdateAvatar(user) {
    api
      .editAvatar(user.avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllpopup();
      })
      .catch((err) => console.log(err));
  }

  //обработчики попапов
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // закрытие попапов
  function closeAllpopup() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ link: "", name: "" });
  }

  function handleCardLike(card) {
    //Проверяем, есть ли уже лайк на этой карточке.
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  //запрос API получение карточек с сервера.
  React.useEffect(() => {
    api
      .getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //обработчик добавления карточек
  function handleAddPlaceSubmit(card) {
    api
      .addCard(card.name, card.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllpopup();
        console.log(card.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // функция удаления карточек, запрос API.
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((item) => item._id !== card._id));
      })
      .catch((err) => console.log(err));
  }
  //Обработчик для отправки данных пользователя на сервер (редактирование данных профиля)
  function handleUpdateUser(user) {
    api
      .editProfile(user.name, user.about)
      .then((res) => {
        setCurrentUser(res);
        closeAllpopup();
      })
      .catch((err) => console.log(err));
  }
  const handleKeyDown =(evt) =>{
    if(evt.key === 'Escape') {
      closeAllpopup()
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container" onKeyDown={handleKeyDown} tabIndex="0">
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllpopup}
          onUpdateUser={handleUpdateUser}

        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllpopup}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllpopup}
          onAddPlace={handleAddPlaceSubmit}
        />

        <ImagePopup card={selectedCard} onClose={closeAllpopup} />
        {/* <PopupWithForm
          onClose={closeAllPopups}
          name="confirm-delete"
          title="Вы уверены?"
          buttonName="Да"
        ></PopupWithForm> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
