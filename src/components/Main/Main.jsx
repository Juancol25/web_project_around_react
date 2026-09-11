import { useState } from "react";
import defaultAvatar from "../../images/Avatar.png";
import addIcon from "../../images/add-icon.svg";
import Card from "./components/Card/Card.jsx";
import Popup from "./components/Popup/Popup.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import NewCard from "./components/NewCard/NewCard.jsx";
import EditAvatar from "./components/Avatar/EditAvatar.jsx";
import ImagePopup from "./components/ImagePopup/ImagePopup.jsx";
import RemoveCard from "./components/RemoveCard/RemoveCard.jsx";

const initialCards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    isLiked: false,
    _id: "5d1f06a1d321eb4bdcd707df",
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    isLiked: false,
    _id: "5d1f06d6d321eb4bdcd707e0",
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
];

export default function Main() {
  const [cards, setCards] = useState(initialCards);
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [userName, setUserName] = useState("Jacques Cousteau");
  const [userAbout, setUserAbout] = useState("Explorer Extraordinary");
  const [userAvatar, setUserAvatar] = useState(defaultAvatar);

  function handleOpenPopup(popupToOpen) {
    setPopup(popupToOpen);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCloseImagePopup() {
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    setCards((state) =>
      state.map((item) =>
        item._id === card._id ? { ...item, isLiked: !item.isLiked } : item
      )
    );
  }

  function handleCardDeleteClick(card) {
    setCardToDelete(card);
  }

  function handleCloseDeletePopup() {
    setCardToDelete(null);
  }

  function handleConfirmDelete() {
    setCards((state) => state.filter((item) => item._id !== cardToDelete._id));
    setCardToDelete(null);
  }

  function handleUpdateUser({ name, about }) {
    setUserName(name);
    setUserAbout(about);
    handleClosePopup();
  }

  function handleUpdateAvatar(avatarLink) {
    setUserAvatar(avatarLink);
    handleClosePopup();
  }

  function handleAddCard({ name, link }) {
    const newCard = { _id: String(Date.now()), name, link, isLiked: false };
    setCards((state) => [newCard, ...state]);
    handleClosePopup();
  }

  const editProfilePopup = {
    title: "Editar perfil",
    children: (
      <EditProfile
        name={userName}
        about={userAbout}
        onUpdateUser={handleUpdateUser}
      />
    ),
  };

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddCard={handleAddCard} />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar onUpdateAvatar={handleUpdateAvatar} />,
  };

  return (
    <main className="main">
      <section className="profile" aria-label="Perfil del usuario">
        <div className="profile__avatar">
          <img
            className="profile__img"
            src={userAvatar}
            alt={`Retrato de ${userName}`}
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Cambiar foto de perfil"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Editar perfil"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__occupation">{userAbout}</p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Agregar tarjeta"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img className="profile__add-button-image" src={addIcon} alt="" />
        </button>
      </section>

      <ul className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDeleteClick}
          />
        ))}
      </ul>

      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}

      {selectedCard && (
        <Popup onClose={handleCloseImagePopup}>
          <ImagePopup card={selectedCard} />
        </Popup>
      )}

      {cardToDelete && (
        <RemoveCard
          onClose={handleCloseDeletePopup}
          onConfirm={handleConfirmDelete}
        />
      )}
    </main>
  );
}
