import express from 'express'
import { getAll, singin, singup } from '../contrenler/auth'
const router = express.Router()
router.post("/signup", singup)
router.get("/signup", getAll)
router.post("/signin", singin)
export default router