import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { router } from './authRouter.js'

const app = express()
app.use(express.json())

app.use('/api', router)

app.use(cors({
  credentials: true,
  origin: process.env.CLIEN_URL
}))

const start = async () => {
  try {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    app.listen(process.env.PORT,
      () => (console.log(`${process.env.API_URL}`)))
  } catch (err) {
    console.log(err)
  }
}

start()
