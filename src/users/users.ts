import express from 'express'

const userRouter = express.Router()

userRouter.post('/login', (req, res) => {
  res.send('login')
})

export { userRouter }

