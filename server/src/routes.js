import { Router } from 'express'

import dashboardRouter from './routes/dashboard'

export default () => {
  const api = Router()
  api.use('/dashboard', dashboardRouter)
  return api
}