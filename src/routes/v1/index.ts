import { Router } from 'express';
import { usuariosRoute } from './usuarios.route';


const router = Router();

const defaultRoutes = [
    { path: '/usuarios', route: usuariosRoute },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export {router};