import { Router } from 'express';
import HomeController from '../controllers/home.js';
import { RegisterController,  PostRegisterController } from '../controllers/register.js';
import { LogInController,  PostLogInController, LogOutController } from '../controllers/login.js';

const appRouter = Router()

appRouter.get('/', HomeController);

//WIP
appRouter.get('/register', RegisterController);
appRouter.post('/register', PostRegisterController);

//TODO
appRouter.get('/login', LogInController);
appRouter.post('/login', PostLogInController);
appRouter.get('/logout', LogOutController);

export default appRouter;
