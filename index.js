import express from "express";
import router  from "./routes/index.js";
import db from './config/db.js';

const app = express();

/***conexion base de datos */
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


///definir puerto 
const port = process.env.PORT || 4001;

/**
 * Habilitar pug
 */
app.set('view engine', 'pug');

/**
 * Agregar body parser para leer los datos del formulario
 */
app.use(express.urlencoded({extended: true}));
/**
 * Definir la carpeta publica 
 */
app.use(express.static('public'));
/**
 * rutas
 */
app.use('/', router);


app.listen(port, () =>{
    console.log('El servidor esta activado ' + port);
})