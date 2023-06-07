import express, { Request, Response, NextFunction } from 'express'
import { userRouter } from './users/users'

const PORT = 8000
const app = express()

app.use('/users', userRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message)
  res.status(401).send(err.message)
})

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
