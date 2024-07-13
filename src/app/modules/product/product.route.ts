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

// update Product
router.put(
  '/:id',
  validateRequest(productValidation.updateProductValidationSchema),
  productController.updateProductData,
)

//* Get all Product Route
router.get('/', productController.getAllProductData)

//* Get Single Product Route
router.get('/:id', productController.getSingleProductData)
router.delete('/:id', productController.deleteSingleProductData)

export const productRoutes = router
