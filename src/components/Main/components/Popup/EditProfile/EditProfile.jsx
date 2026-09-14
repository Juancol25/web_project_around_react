import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAboutChange(event) {
    setAbout(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleUpdateUser({ name, about });
  }

  return (
    <form className="popup__form" noValidate onSubmit={handleSubmit}>
      <label className="popup__form-label">
        <input
          className="popup__input popup__input_name"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          required
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleNameChange}
        />
        <span id="name-error" className="popup__error"></span>
      </label>
      <label className="popup__form-label">
        <input
          className="popup__input popup__input_occupation"
          type="text"
          name="about"
          id="about"
          placeholder="Acerca de mi"
          minLength="2"
          maxLength="200"
          required
          value={about}
          onChange={handleAboutChange}
        />
        <span id="about-error" className="popup__error"></span>
      </label>
      <button className="popup__button popup__button_profile" type="submit">
        Guardar
      </button>
    </form>
  );
}
