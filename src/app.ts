import express, { Application, Request, Response } from 'express'
import { bookRoutes } from './app/controllers/book.controller'
import { borrowBook } from './app/controllers/borrow.controller'
const app: Application = express()

app.use(express.json())

app.use('/api/books', bookRoutes)
app.use('/api/borrow' , borrowBook)


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to library management system')
})

export default app;