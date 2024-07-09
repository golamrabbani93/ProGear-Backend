import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { productValidation } from './product.validation'
import { productController } from './product.controller'

const router = express.Router()

//* create Product Route

router.post(
  '/',
  validateRequest(productValidation.createProductValidationSchema),
  productController.createProductData,
)

export const productRoutes = router
