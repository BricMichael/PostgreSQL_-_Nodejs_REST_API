import express, { json } from 'express';
import morgan from 'morgan'
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

const app = express();

//middlewares
app.use(morgan('dev')); // ver las peticiones que le llegan al server
app.use(json()); // Cuando el cliente nos envie info en formato JSON el server la puede entender

//routes 
app.use('/api/projects', projectRoutes)  // importo mis rutas a este modulo y cuando ingresen ese path definido, empieza a interacturar con las rutas
app.use('/api/tasks' , taskRoutes)

app.get('/', (req,res)=> res.send('hola server'))

export default app;