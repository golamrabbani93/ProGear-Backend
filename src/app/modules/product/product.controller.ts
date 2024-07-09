import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { productServices } from './product.service'

// *create Product  data
const createProductData = catchAsync(async (req: Request, res: Response) => {
  const productData = req.body
  const result = await productServices.saveProductIntoDB(productData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Created successfully',
    data: result,
  })
})

// *Get All Product data
const getAllProductData = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.getAllProductDataFormDB()
  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    })
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    })
  }
})

export const productController = {
  createProductData,
  getAllProductData,
}
