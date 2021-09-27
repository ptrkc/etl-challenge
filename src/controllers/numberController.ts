import { Request, Response } from 'express';
import path from 'path';
import * as numberService from '../services/numberService';

export async function getByPage(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const page = await numberService.getByPage(id);
    if (page) res.send({ numbers: page });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    res.download(path.join(__dirname, '../../public/numbers.json'));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
