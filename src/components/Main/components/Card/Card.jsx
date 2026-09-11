export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { name, link, isLiked } = card;
  const likeButtonClassName = `element__like-button${
    isLiked ? " element__like-button_active" : ""
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <img
        className="element__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <button
        className="element__delete-button"
        type="button"
        aria-label="Eliminar tarjeta"
        onClick={handleDeleteClick}
      />
      <div className="element__info">
        <h2 className="element__title">{name}</h2>
        <button
          className={likeButtonClassName}
          type="button"
          aria-label="Me gusta"
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}
