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
  const query = req.query
  const result = await productServices.getAllProductDataFormDB(query)
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

// *Get Single Product data
const getSingleProductData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await productServices.getSingleProductDataFromDB(id)
  if (result) {
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

// *create Product  data
const updateProductData = catchAsync(async (req: Request, res: Response) => {
  const productData = req.body
  const { id } = req.params
  const result = await productServices.updateProductIntoDB(id, productData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Updated successfully',
    data: result,
  })
})
// *delete Product  data
const deleteSingleProductData = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await productServices.deleteSingleProductDataFromDB(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product Deleted successfully',
      data: result,
    })
  },
)

export const productController = {
  createProductData,
  getAllProductData,
  getSingleProductData,
  updateProductData,
  deleteSingleProductData,
}
