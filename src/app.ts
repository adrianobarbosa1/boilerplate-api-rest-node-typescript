import express from 'express';
import { router } from './routes/v1';


const app = express();

app.use(express.json({ limit: '50mb' }));

app.use(router);

app.get('/', (_, res) => {
    res.status(200).json({
        title: 'API NOME',
        version: '0.0.1',
    });
});

app.use('/api/v1', router);


export { app };