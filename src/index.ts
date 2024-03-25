import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5002;

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
