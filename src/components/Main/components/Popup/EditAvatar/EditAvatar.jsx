import { useContext, useRef } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    handleUpdateAvatar({ avatar: avatarInputRef.current.value });
    avatarInputRef.current.value = "";
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
          ref={avatarInputRef}
        />
        <span id="avatar-link-error" className="popup__error"></span>
      </label>
      <button className="popup__button popup__button_avatar" type="submit">
        Guardar
      </button>
    </form>
  );
}
