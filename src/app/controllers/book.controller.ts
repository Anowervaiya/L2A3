import express, { Request, Response } from 'express';
import { Book } from '../models/book.model';
export const bookRoutes = express.Router();

bookRoutes.post('/', async (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);

  const book = await Book.create(body)
  res.status(201).json({
    success: true,
    message: 'Book created successfully',
    data : book
  });
});
