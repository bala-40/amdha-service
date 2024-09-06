
import express from 'express';
import path from 'path';
import morgan from 'morgan';
import { apiRouter } from './routes/api/router.master';


let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.resolve('public')));

app.use(morgan('dev'))

app.use("/api", apiRouter);

export default app;