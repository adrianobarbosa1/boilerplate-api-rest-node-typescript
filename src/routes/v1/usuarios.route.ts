import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send('ola mundo');
});

export {router as usuariosRoute};