import { Router } from 'express';
import HomeController from '../controllers/home.js';
import { RegisterController,  PostRegisterController } from '../controllers/register.js';
import { LogInController,  PostLogInController, LogOutController } from '../controllers/login.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const appRouter = Router()

appRouter.get('/', isLoggedIn, HomeController);

appRouter.get('/register', RegisterController);
appRouter.post('/register', PostRegisterController);

appRouter.get('/login', LogInController);
appRouter.post('/login', PostLogInController);
appRouter.get('/logout', isLoggedIn, LogOutController);

export default appRouter;
