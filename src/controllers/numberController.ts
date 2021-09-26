import { Request, Response } from 'express';
import * as numberService from '../services/numberService';

export async function getByPage(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    if (!id) return res.sendStatus(400);
    const page = await numberService.getByPage(id);
    if (page) res.send({ numbers: page });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const result = await numberService.getAll();
    res.send(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
