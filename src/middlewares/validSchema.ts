import { Request, Response, NextFunction } from "express";

export default function validSchema(Schema: any) {
  const value = (req: Request, res: Response, next: NextFunction) => {
    const toValid = req.body;
    const { error } = Schema.validate(toValid)
    if (error) {
      throw { code: 'Unprocessable Entity', message: error }
    }
    next()
  }
  return value
}
