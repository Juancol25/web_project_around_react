# Alrededor de los EE.UU. (React + Vite)

Proyecto "Alrededor de los EE.UU." migrado de HTML/CSS/JS vanilla a React, usando Vite como herramienta de compilación.

## Tecnologías

- React 19
- Vite
- CSS (metodología BEM, heredada del proyecto original)

## Estructura de componentes

```
src/components/
  App.jsx
  Header/Header.jsx
  Footer/Footer.jsx
  Main/Main.jsx
    components/
      Card/Card.jsx
      Popup/Popup.jsx
      NewCard/NewCard.jsx
      EditProfile/EditProfile.jsx
      Avatar/EditAvatar.jsx
      ImagePopup/ImagePopup.jsx
      RemoveCard/RemoveCard.jsx
```

## Cómo ejecutar

```bash
npm install
npm run dev
```

El proyecto corre en `http://localhost:3000`.

## Funcionalidad

- Renderizado de perfil de usuario y tarjetas.
- Ventanas emergentes para editar perfil, cambiar avatar y agregar tarjetas.
- Ampliar una tarjeta en una ventana emergente de imagen.
- Confirmación antes de eliminar una tarjeta.
- Dar/quitar "me gusta" a una tarjeta.
