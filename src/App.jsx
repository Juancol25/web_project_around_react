import "./index.css";
import logo from "./images/Vector.svg";
import avatar from "./images/Avatar.png";
import addIcon from "./images/add-icon.svg";

function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src={logo} alt="Around The U.S." />
        <div className="header__line"></div>
      </header>

      <main className="main">
        <section className="profile" aria-label="Perfil del usuario">
          <div className="profile__avatar">
            <img
              className="profile__img"
              src={avatar}
              alt="Retrato de Jacques Cousteau"
            />
            <button
              className="profile__avatar-edit-button"
              type="button"
              aria-label="Cambiar foto de perfil"
            ></button>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Editar perfil"
            ></button>
            <p className="profile__occupation">Explorer Extraordinary</p>
          </div>

          <button
            className="profile__add-button"
            type="button"
            aria-label="Agregar tarjeta"
          >
            <img className="profile__add-button-image" src={addIcon} alt="" />
          </button>
        </section>

        <ul className="elements"></ul>
      </main>

      <footer className="footer">
        <p className="footer__text">© 2024 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;