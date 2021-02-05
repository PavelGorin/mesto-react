import avataredit from '../images/profile__avatar-edit.svg';
import avatardef from '../images/profile__avatar.jpg';
import editbutton from '../images/profile__edit-button.svg';
import addbutton from '../images/profile__add-button.svg';
import { useState, useEffect } from "react";
import api from '../utils/Api';
import Card from './Card';


function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setuserName] = useState("Pavel Gorin");
  const [userDescription, setuserDescription] = useState("web Developer");
  const [userAvatar, setuserAvatar] = useState({ avatardef });
  const [cards, setCard] = useState([]);

  useEffect(() => {
    api.getUserData()
      .then((res) => {
        setuserName(res.name);
        setuserDescription(res.about);
        setuserAvatar(res.avatar)
      })
      .catch((err) => { console.log(err) })
    api.getInitialCardsList()
      .then((info) => {
        setCard(info)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="page">
        <section className="profile">
          <button className="profile__avatar-section" onClick={onEditAvatar}>
            <img src={avataredit} alt="иконка редактирования"
              className="profile__avatar-button" />
            <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
          </button>
          <div className="profile__info">
            <p className="profile__name">{userName}</p>
            <button type="button" className="profile__edit-button" onClick={onEditProfile}><img src={editbutton}
              alt="кнопка редактирования" /></button>
            <p className="profile__profession">{userDescription}</p>
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace}><img src={addbutton}
            alt="кнопка добаления профайла" /></button>
        </section>

        <section className="elements">
          {cards.map((item) => {
            return (<Card key={item._id} card={item} onCardClick={onCardClick} />)
          })}
        </section>
      </div>
    </>
  )
}

export default Main;


