import express from 'express';
import "dotenv/config";
import cors from "cors";
import ConnectDB from './models/connection';
import router from './routers';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/v1", router);

ConnectDB();

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});