import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import addIcon from "../../images/add-icon.svg";
import Card from "./components/Card/card.jsx";
import Popup from "./components/Popup/popup.jsx";
import EditProfile from "./components/Popup/EditProfile/editProfile.jsx";
import EditAvatar from "./components/Popup/EditAvatar/editAvatar.jsx";
import NewCard from "./components/Popup/NewCard/newCard.jsx";
import ImagePopup from "./components/Popup/ImagePopup/imagePopup.jsx";

export default function Main({
  cards,
  popup,
  selectedCard,
  onOpenPopup,
  onClosePopup,
  onCardClick,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile" aria-label="Perfil del usuario">
        <div className="profile__avatar">
          <img
            className="profile__img"
            src={currentUser.avatar}
            alt={`Retrato de ${currentUser.name}`}
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Cambiar foto de perfil"
            onClick={() => onOpenPopup("editAvatar")}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Editar perfil"
            onClick={() => onOpenPopup("editProfile")}
          ></button>
          <p className="profile__occupation">{currentUser.about}</p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Agregar tarjeta"
          onClick={() => onOpenPopup("newCard")}
        >
          <img className="profile__add-button-image" src={addIcon} alt="" />
        </button>
      </section>

      <ul className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>

      {popup === "editProfile" && (
        <Popup title="Editar perfil" onClose={onClosePopup}>
          <EditProfile />
        </Popup>
      )}

      {popup === "editAvatar" && (
        <Popup title="Cambiar foto de perfil" onClose={onClosePopup}>
          <EditAvatar />
        </Popup>
      )}

      {popup === "newCard" && (
        <Popup title="Nuevo lugar" onClose={onClosePopup}>
          <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />
        </Popup>
      )}

      {popup === "imagePopup" && selectedCard && (
        <Popup onClose={onClosePopup}>
          <ImagePopup card={selectedCard} />
        </Popup>
      )}
    </main>
  );
}
