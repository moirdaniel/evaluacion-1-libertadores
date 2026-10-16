// Cargamos las herramientas y los datos que usará la API.
import express from 'express';
import cors from 'cors';
import { paises, clubes } from './datos.js';

// Creamos la aplicación y permitimos consultas desde páginas de otros sitios.
const app = express();
app.use(cors());

// Esta ruta muestra todos los clubes o solo los de un país.
app.get('/api/clubes', (req, res) => {
  // Leemos el país escrito en la URL, por ejemplo: ?pais=Chile.
  const { pais } = req.query;

  // Si no se indicó un país, devolvemos todos los clubes.
  if (pais === undefined) {
    return res.status(200).json(clubes);
  }

  // Comprobamos que se haya enviado un solo país como texto.
  if (typeof pais !== 'string') {
    return res.status(404).json({ error: 'No existe el país solicitado' });
  }

  // find busca un país. Pasamos los nombres a minúsculas para compararlos.
  const paisEncontrado = paises.find(
    (item) => item.nombre.toLowerCase() === pais.toLowerCase()
  );

  // Si el país no existe, avisamos con un error 404.
  if (!paisEncontrado) {
    return res.status(404).json({ error: `No existe el país ${pais}` });
  }

  // filter deja solo los clubes que tienen el id de ese país.
  const resultado = clubes.filter((club) => club.paisId === paisEncontrado.id);
  // El código 200 indica que la consulta salió bien.
  res.status(200).json(resultado);
});

// Esta ruta busca un club por su id, por ejemplo: /api/clubes/9.
app.get('/api/clubes/:id', (req, res) => {
  // Convertimos el id de la URL de texto a número para poder compararlo.
  const id = Number(req.params.id);
  // find devuelve el club que tiene ese id, o undefined si no existe.
  const club = clubes.find((item) => item.id === id);

  // Si no encontramos el club, devolvemos un mensaje de error.
  if (!club) {
    return res.status(404).json({ error: `No existe el club ${req.params.id}` });
  }

  // Enviamos el club encontrado en formato JSON.
  res.status(200).json(club);
});

// Esta ruta muestra los años en que un club ganó la Copa Libertadores.
app.get('/api/titulos/:club', (req, res) => {
  // Buscamos por nombre sin distinguir entre mayúsculas y minúsculas.
  const club = clubes.find(
    (item) => item.nombre.toLowerCase() === req.params.club.toLowerCase()
  );

  // Si el nombre no corresponde a ningún club, respondemos con 404.
  if (!club) {
    return res.status(404).json({ error: `No existe el club ${req.params.club}` });
  }

  // Si el club existe pero no ganó títulos, devolvemos [] con código 200.
  res.status(200).json(club.titulos);
});

// Si ninguna ruta coincide con la URL, avisamos que la ruta no existe.
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Encendemos el servidor en el puerto 3000 y mostramos su dirección.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API de la Copa Libertadores en http://localhost:${PORT}`);
});
