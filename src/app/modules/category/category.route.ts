import express from 'express'
import { categoryControllers } from './category.controller'

const router = express.Router()

// *Get All Category
router.get('/', categoryControllers.getAllCategoryData)

export const categoryRoute = router
