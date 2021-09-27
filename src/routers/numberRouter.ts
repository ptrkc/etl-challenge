import express from 'express';
import * as numberController from '../controllers/numberController';
import { idMiddleware } from '../middlewares/idMiddleware';
const numbers = express.Router();

numbers.get('/:id', idMiddleware, numberController.getByPage);

numbers.get('/', numberController.getAll);

export default numbers;
