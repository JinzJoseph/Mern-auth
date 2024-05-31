import express from 'express'
import {gettext }  from '../controllers/UserController.js'
const router=express.Router()

router.get("/gt",gettext)
export default router;  