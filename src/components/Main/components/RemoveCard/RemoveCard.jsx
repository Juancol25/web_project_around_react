export default function RemoveCard({ onClose, onConfirm }) {
  return (
    <div className="popup popup_opened">
      <div className="popup__container popup__container_type_confirm">
        <button
          className="popup__close"
          type="button"
          aria-label="Cerrar ventana"
          onClick={onClose}
        />
        <h2 className="popup__title popup__title_type_confirm">
          ¿Estás seguro?
        </h2>
        <button
          className="popup__button popup__button_type_confirm"
          type="button"
          onClick={onConfirm}
        >
          Sí
        </button>
      </div>
    </div>
  );
}
