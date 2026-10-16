# API de la Copa Libertadores

Evaluación 1 del Módulo 3. API con Node.js, Express y CORS, usando los datos entregados de 16 clubes y 5 países en memoria.

Repositorio: https://github.com/moirdaniel/evaluacion-1-libertadores

## Iniciar

Requiere Node.js 20 o superior y Yarn Classic.

```powershell
cd "C:\Repositorios\Diplomado Modulo 3\evaluacion-1-libertadores"
yarn
yarn dev
```

Si Yarn no está instalado, puedes ejecutar:

```powershell
npx.cmd --yes yarn@1.22.22 install
npx.cmd --yes yarn@1.22.22 dev
```

La API queda en http://localhost:3000. Deja la terminal abierta. Al guardar `server.js`, Node reinicia el servidor automáticamente. Para detenerlo, presiona Ctrl + C. Si el puerto está ocupado por el ejercicio de clase 02, detén ese servidor primero.

## Probar en Postman

Todas las solicitudes usan GET y no necesitan Body. Agrega cada ruta a `http://localhost:3000`.

| Ruta | Estado | Respuesta |
| --- | --- | --- |
| `/api/clubes` | 200 | 16 clubes |
| `/api/clubes/9` | 200 | Colo-Colo |
| `/api/clubes/99` | 404 | Error JSON |
| `/api/clubes?pais=Chile` | 200 | 4 clubes chilenos |
| `/api/clubes?pais=CHILE` | 200 | Los mismos 4 clubes |
| `/api/clubes?pais=narnia` | 404 | Error JSON |
| `/api/titulos/colo-colo` | 200 | `[1991]` |
| `/api/titulos/COLO-COLO` | 200 | `[1991]` |
| `/api/titulos/universidad%20de%20chile` | 200 | `[]` |
| `/api/titulos/narnia` | 404 | Error JSON |

Los nombres ignoran mayúsculas, pero respetan tildes y ñ. Los espacios en las URLs se representan con `%20`.

## Cómo funciona

`datos.js` exporta los arreglos de países y clubes. `server.js` define las rutas. `find` busca un solo elemento y `filter` obtiene una lista.

Para filtrar por país, primero buscamos su nombre en `paises`. Después filtramos `clubes` comparando `paisId` con el id encontrado. Un club existente sin títulos devuelve `200` con `[]`; un club inexistente devuelve `404` con un mensaje JSON.

## Video

Pendiente: grabar el video y reemplazar esta línea por su enlace de YouTube accesible sin permisos. Consulta `GUIA-VIDEO.md`.

## Entrega pendiente

- Grabar el video con tu voz y agregar su enlace aquí.
- Entregar el enlace del repositorio en el LMS según el plazo del enunciado.
