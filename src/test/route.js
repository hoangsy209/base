import express from 'express'

const router = express.Router()

router.get('/', function (req, res){
    console.log('a');
    
        res.send({a: 'a'})
})

export default router