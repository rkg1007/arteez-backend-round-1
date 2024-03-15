import { Router } from 'express';
import { userRouter } from './users.route.js';

export const apiRouter = Router();

apiRouter.use('/users', userRouter);
