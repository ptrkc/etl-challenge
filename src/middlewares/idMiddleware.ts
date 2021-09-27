import { Request, Response, NextFunction } from 'express';

export function idMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    if (!id || String(id) !== req.params.id) return res.sendStatus(400);
    return next();
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}
