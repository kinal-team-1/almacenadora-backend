import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import taskRoutes from './src/route/task.routes';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: ['.env', '.env.example'],
  });
}
const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.use('/api/task', taskRoutes);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
