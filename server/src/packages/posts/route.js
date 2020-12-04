import express from "express"
import controller from "./controller"

const router = express.Router()
/* GET home page. */
router.get('/', controller.index);

export default router
