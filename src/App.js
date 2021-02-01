import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="noclassyet">
     <div className="page">
    <header className="header">
      <img className="header__logo" src="<%=require('./images/header__logo.svg')%>" alt="логотип"/>
    </header>
    <section className="profile">
      <button className="profile__avatar-section">
        <img src="<%=require('./images/profile__avatar-edit.svg')%>" alt="иконка редактирования"
          className="profile__avatar-button"/>
        <img className="profile__avatar" src="<%=require('./images/profile__avatar.jpg')%>" alt="Аватар пользователя"/>
      </button>
      <div className="profile__info">
        <p className="profile__name">Gorin Pavel</p>
        <button type="button" className="profile__edit-button"><img src="<%=require('./images/profile__edit-button.svg')%>"
            alt="кнопка редактирования"/></button>
        <p className="profile__profession">Web-developer</p>
      </div>
      <button type="button" className="profile__add-button"><img src="<%=require('./images/profile__add-button.svg')%>"
          alt="кнопка добаления профайла"/></button>
    </section>

    <section className="elements">
    </section>
  </div>
  <footer className="footer">
    <p className="footer__copyright">&copy;2020 Gorin Pavel</p>
  </footer>
  <section className="popup popup_avatar">
    <form className="popup__container popup__avatar-form popup__container_avatar" novalidate name="update-avatar">
      <div className="popup__blank">
        <p className="popup__title">Обновить аватар</p>
        <input className="popup__input popup__avatar-link" type="url" name="avatar" placeholder="Ссылка на avatar"
          id="avatar-url" required minlength="2"/>
        <span className="popup__input-error" id="avatar-url-error"></span>
        <button className="popup__save-button popup__save-button_inactive" type="submit">Сохранить</button>
      </div>
      <button type="button" className="popup__close-button popup__close-button_avatar"></button>
    </form>
  </section>

  <section className="popup popup_profile">
    <form action="#" className="popup__container popup__container_profile" name="edit-profile" novalidate>
      <div className="popup__blank">
        <p className="popup__title">Редактировать профиль</p>
        <input className="popup__input popup__name" id="edit-title" name="title" type="text" placeholder="Имя" required
          minlength="2" maxlength="40"/>
        <span className="popup__input-error" id="edit-title-error"></span>
        <input className="popup__input popup__profession" id="edit-subtitle" name="subtitle" type="text"
          placeholder="Вид деятельности" required minlength="2" maxlength="200"/>
        <span className="popup__input-error" id="edit-subtitle-error"></span>
        <button className="popup__save-button popup__save-button_profile" type="submit">Сохранить</button>
      </div>
      <button type="button" className="popup__close-button popup__close-button_profile"></button>
    </form>
  </section>

  <section className="popup popup_new-place">
    <form className="popup__container popup__container_new-place" name="add-place" novalidate>
      <div className="popup__blank">
        <p className="popup__title">Новое место</p>
        <input className="popup__input popup__place" name="name" id="add-name" type="text" placeholder="Название"
          required minlength="2" maxlength="40"/>
        <span className="popup__input-error" id="add-name-error"></span>
        <input className="popup__input popup__link" name="link" id="add-url" placeholder="Ссылка на картинку" required
          type="url"/>
        <span className="popup__input-error" id="add-url-error"></span>
        <button className="popup__save-button popup__save-button_new-place popup__save-button_inactive"
          type="submit">Создать</button>
      </div>
      <button type="button" className="popup__close-button popup__close-button_newplace"></button>
    </form>
  </section>

  <section className="popup popup_del-card">
    <form className="popup__container" novalidate name="confirm-delete">
      <div className="popup__blank">
        <p className="popup__title popup__title_del-card">Вы уверены?</p>
        <button className="popup__save-button" type="submit">Да</button>
      </div>
      <button type="button" className="popup__close-button popup__close-button_del"></button>
    </form>
  </section>

  <section className="popup popup_image">
    <div className="popup__container">
      <div className="popup__image-block">
        <img className="popup__picture" src="#" alt="#"/>
        <p className="popup__picture-name"></p>
      </div>
      <button type="button" className="popup__close-button popup__close-button_image"></button>
    </div>
  </section>

  <template className="card">
    <div className="element">
      <button className="element__picture"><img className="element__image" src="#" alt="#"/></button>
      <button className="element__trash-bin"><img src="<%=require('./images/element__trash-bin.svg')%>"
          alt="Мусорное ведро"/></button>
      <div className="element__info">
        <p className="element__name">name</p>
        <div className="element__like-box">
          <button type="button" className="element__like">
            <img src="<%=require('./images/element__like.svg')%>" alt="лайк"/>
          </button>
          <p className="element__number-of-likes">0</p>
        </div>
      </div>
    </div>
  </template>
    </div>
  );
}

export default App;
