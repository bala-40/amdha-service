
import express from 'express';
import path from 'path';
import morgan from 'morgan';
import meetingRouter from './routes/api/meeting';
import tokenRouter from './routes/api/tokens';


let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.resolve('public')));

app.use(morgan('dev'))

app.use("/api/meeting", meetingRouter);
app.use("/api/tokens", tokenRouter);

export default app;