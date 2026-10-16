# Guía para tu video (3 a 5 minutos)

Usa tus propias palabras y muestra el código y Postman con un tamaño legible.

1. Presenta la API y muestra `package.json`: Express, CORS, `type: module` y el script `dev` con `node --watch`.
2. Ejecuta `yarn dev`. Guarda un comentario en `server.js` y muestra el reinicio automático en la terminal.
3. En Postman, muestra los resultados y códigos de estado de estas solicitudes GET:
   - `/api/clubes/9`: 200, Colo-Colo.
   - `/api/clubes/99`: 404, error JSON.
   - `/api/clubes?pais=Chile`: 200, cuatro clubes.
   - `/api/clubes?pais=narnia`: 404, error JSON.
   - `/api/titulos/colo-colo`: 200, `[1991]`.
   - `/api/titulos/universidad%20de%20chile`: 200, `[]`.
   - `/api/titulos/narnia`: 404, error JSON.
4. Muestra la búsqueda por país en el código y explica por qué primero necesitas encontrar el país y luego usar su id para filtrar clubes.
5. Explica por qué Universidad de Chile devuelve una lista vacía con 200 y un club inexistente devuelve 404.

Antes de entregar: sube tu video a YouTube (puede ser no listado), prueba el enlace en incógnito y pégalo en el README. El video debe incluir tu voz.
