import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext.js";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext);
  const { name, link, likes, owner } = card;

  const isOwn = Boolean(owner) && owner._id === currentUser._id;
  const isLiked = Boolean(likes) && likes.some((user) => user._id === currentUser._id);

  const cardDeleteButtonClassName = `element__delete-button${
    isOwn ? "" : " element__delete-button_hidden"
  }`;
  const cardLikeButtonClassName = `element__like-button${
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
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Eliminar tarjeta"
        onClick={handleDeleteClick}
      />
      <div className="element__info">
        <h2 className="element__title">{name}</h2>
        <button
          className={cardLikeButtonClassName}
          type="button"
          aria-label="Me gusta"
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}
