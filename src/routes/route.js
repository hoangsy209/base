import { Router } from 'express'
import testRoute from '../test/route'

const api = Router()

api.use('/travel',testRoute)

export default api