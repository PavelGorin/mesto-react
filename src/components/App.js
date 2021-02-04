import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from "react";

function App() {

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setselectedCard(false);
  }

  function handleCardClick(props) {
    setselectedCard(props)
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState(false);

  return (
    <div className="noclassyet">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="profile" submit="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__name" id="edit-title" name="title" type="text" placeholder="Имя" required
          minLength="2" maxLength="40" />
        <span className="popup__input-error" id="edit-title-error"></span>
        <input className="popup__input popup__profession" id="edit-subtitle" name="subtitle" type="text"
          placeholder="Вид деятельности" required minLength="2" maxLength="200" />
        <span className="popup__input-error" id="edit-subtitle-error"></span>
      </PopupWithForm>
      <PopupWithForm title="Обновить аватар" name="avatar" submit="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__avatar-link" type="url" name="avatar" placeholder="Ссылка на avatar"
          id="avatar-url" required minLength="2" />
        <span className="popup__input-error" id="avatar-url-error"></span>
      </PopupWithForm>
      <PopupWithForm title="Новое место" name="new-place" submit="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__place" name="name" id="add-name" type="text" placeholder="Название"
          required minLength="2" maxLength="40" />
        <span className="popup__input-error" id="add-name-error"></span>
        <input className="popup__input popup__link" name="link" id="add-url" placeholder="Ссылка на картинку" required
          type="url" />
        <span className="popup__input-error" id="add-url-error"></span>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="del-card" submit="Да">
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
    </div>
  );
}


export default App;
