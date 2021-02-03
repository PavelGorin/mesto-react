function PopupWithForm(props) {
  return (
    <section className={props.isOpen ? `popup_opened popup popup_${props.name}` : `popup popup_${props.name}`}>
      <form action="#" className={`popup__container popup__container_${props.name}`} name={`${props.name}`} noValidate>
        <div className="popup__blank">
          <p className="popup__title">{props.title}</p>
          {props.children}
          <button className={`popup__save-button popup__save-button_${props.name}`} type="submit">{props.submit}</button>
        </div>
        <button type="button" className={`popup__close-button popup__close-button_${props.name}`} onClick={props.onClose}></button>
      </form>
    </section>
  )
}

export default PopupWithForm;