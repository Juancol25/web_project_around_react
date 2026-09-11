import { useState } from "react";

export default function EditAvatar({ onUpdateAvatar }) {
  const [avatarLink, setAvatarLink] = useState("");

  function handleChange(event) {
    setAvatarLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar(avatarLink);
    setAvatarLink("");
  }

  return (
    <form className="popup__form" noValidate onSubmit={handleSubmit}>
      <label className="popup__form-label">
        <input
          className="popup__input popup__input_avatar-link"
          type="url"
          name="avatar"
          id="avatar-link"
          placeholder="Enlace a la imagen"
          required
          value={avatarLink}
          onChange={handleChange}
        />
        <span id="avatar-link-error" className="popup__error"></span>
      </label>
      <button className="popup__button popup__button_avatar" type="submit">
        Guardar
      </button>
    </form>
  );
}
