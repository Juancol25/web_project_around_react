import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [formValue, setFormValue] = useState({ name: "", link: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValue((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlaceSubmit(formValue);
    setFormValue({ name: "", link: "" });
  }

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__form-label">
        <input
          className="popup__input popup__input_card-name"
          id="card-name"
          maxLength="30"
          minLength="2"
          name="name"
          placeholder="Título"
          required
          type="text"
          value={formValue.name}
          onChange={handleChange}
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="popup__form-label">
        <input
          className="popup__input popup__input_card-link"
          id="card-link"
          name="link"
          placeholder="Enlace a la imagen"
          required
          type="url"
          value={formValue.link}
          onChange={handleChange}
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>
      <button className="popup__button popup__button_card" type="submit">
        Guardar
      </button>
    </form>
  );
}
