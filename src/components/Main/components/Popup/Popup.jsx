export default function Popup({ onClose, title, children }) {
  const containerClassName = `popup__container${
    !title ? " popup__container_type_image" : ""
  }`;

  return (
    <div className="popup popup_opened">
      <div className={containerClassName}>
        <button
          className="popup__close"
          type="button"
          aria-label="Cerrar ventana"
          onClick={onClose}
        />
        {title && <h2 className="popup__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
