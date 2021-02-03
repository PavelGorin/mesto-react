import trash from '../images/element__trash-bin.svg';
import like from '../images/element__like.svg';

export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card)
  }
  return (
    <div className="element" key={card._id}>
      <button className="element__picture"><img className="element__image" src={card.link} alt={card.name} onClick ={handleClick}/></button>
      <button className="element__trash-bin"><img src={trash}
        alt="Мусорное ведро" /></button>
      <div className="element__info">
        <p className="element__name">{card.name}</p>
        <div className="element__like-box">
          <button type="button" className="element__like">
            <img src={like} alt="лайк" />
          </button>
          <p className="element__number-of-likes">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )

}