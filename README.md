# Alrededor de los EE.UU. (React + Vite + API)

Proyecto "Alrededor de los EE.UU." migrado de HTML/CSS/JS vanilla a React, conectado a la API real de TripleTen (`around-api.es.tripleten-services.com`), usando Vite como herramienta de compilación.

## Tecnologías

- React 19
- Vite
- Context API (`CurrentUserContext`)
- CSS (metodología BEM, heredada del proyecto original)

## Estructura de componentes

```
src/
  utils/api.js               <- clase Api + instancia exportada
  contexts/CurrentUserContext.js
  components/
    App.jsx                  <- estado raíz, efectos, todas las llamadas API
    Header/Header.jsx
    Footer/Footer.jsx
    Main/Main.jsx             <- suscrito a CurrentUserContext
      components/
        card/Card.jsx         <- suscrito a CurrentUserContext
        popup/
          Popup.jsx
          EditProfile/EditProfile.jsx
          EditAvatar/EditAvatar.jsx     <- usa useRef
          ImagePopup/ImagePopup.jsx
          NewCard/NewCard.jsx
          RemoveCard/RemoveCard.jsx
```

## Cómo ejecutar

```bash
npm install
npm run dev
```

El proyecto corre en `http://localhost:3000`.

## Funcionalidad

- El perfil y las tarjetas se obtienen de la API al montar la aplicación (`api.getAppInfo()`).
- `CurrentUserContext` distribuye los datos del usuario actual (y los manejadores `handleUpdateUser` / `handleUpdateAvatar`) a `Main` y `Card` sin pasar props manualmente por cada nivel.
- Editar perfil, cambiar avatar y agregar tarjeta hacen peticiones reales a la API y actualizan el estado con la respuesta.
- Dar/quitar "me gusta" llama a `api.changeLikeCardStatus` y actualiza solo la tarjeta correspondiente.
- Eliminar una tarjeta llama a `api.deleteCard` y la retira del estado local (sin ventana de confirmación todavía, como pide el sprint).
- El botón de eliminar solo se muestra en las tarjetas propias (comparando `card.owner._id` con `currentUser._id`).

## Pendiente para el siguiente sprint

- Ventana de confirmación antes de eliminar una tarjeta (`RemoveCard.jsx` ya existe pero no está conectada).
- Validación de formularios e indicadores de carga.
