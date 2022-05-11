import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/router.js';

dotenv.config();

const app = express();

app.use(cors());

app.use('/api', router);

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';
app.listen(port, host, () => console.log('server running correctly!'))