import express from 'express';
import dotEnv from 'dotenv';
import usersController from './controllers/usersHttp.controller';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(express.json());

app.post('/users', usersController);

app.get('/health', (req, res) => {
  res.send('Status Ok!')
})

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
