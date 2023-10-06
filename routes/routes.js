import { Router } from 'express';
import HomeController from '../controllers/home.js';
import { RegisterController,  PostRegisterController } from '../controllers/register.js';
//import { LogInController,  PostLogInController } from '../controllers/register.js';

const appRouter = Router()

appRouter.get('/', HomeController);

//WIP
appRouter.get('/register', RegisterController);
appRouter.post('/register', PostRegisterController);

//TODO
/*appRouter.get('/register', LogInController);
appRouter.post('/login', PostLogInController);
*/

export default appRouter;
