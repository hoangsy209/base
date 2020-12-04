import { Router } from 'express'
import Posts from '../packages/posts/route'

const api = Router()

/* GET home page. */
api.use('/posts', Posts)

/* GET home page. */
api.use('/', function(req, res, next) {
  res.send({ title: 'Express' })
});


export default api
