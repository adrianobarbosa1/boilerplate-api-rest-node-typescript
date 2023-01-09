import express from 'express';
import { router } from './routes/v1';
import {StatusCodes} from 'http-status-codes';
import 'dotenv/config';


const app = express();

app.use(express.json({ limit: '50mb' }));

app.use(router);

app.get('/', (_, res) => {
    res.status(StatusCodes.OK).json({
        title: process.env.API_NOME,
        version: process.env.API_VERSION,
    });
});

app.use('/api/v1', router);


export { app };