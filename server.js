import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import taskRoutes from './src/route/task.routes.js';
import labelRoutes from './src/route/label.routes.js';
import dbConnection from './src/db/db-connection.js';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: ['.env', '.env.example'],
  });
}
const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('common'));
}

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.use('/api/task', taskRoutes);
app.use('/api/label', labelRoutes);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e);
    console.log('UNABLE TO CONNECT TO DATABASE');
  });
