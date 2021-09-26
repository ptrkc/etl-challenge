import express from 'express';
import * as numberController from '../controllers/numberController';
const numbers = express.Router();

numbers.get('/:id', numberController.getByPage);

numbers.get('/', numberController.getAll);

export default numbers;
