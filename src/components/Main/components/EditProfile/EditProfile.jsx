import { useState } from "react";

export default function EditProfile({ name, about, onUpdateUser }) {
  const [formValue, setFormValue] = useState({ name, about });

  function handleChange(event) {
    const { name: fieldName, value } = event.target;
    setFormValue((previous) => ({ ...previous, [fieldName]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser(formValue);
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
          value={formValue.name}
          onChange={handleChange}
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
          value={formValue.about}
          onChange={handleChange}
        />
        <span id="about-error" className="popup__error"></span>
      </label>
      <button className="popup__button popup__button_profile" type="submit">
        Guardar
      </button>
    </form>
  );
}
