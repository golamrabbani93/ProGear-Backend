import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { categotyServices } from './category.service'

// *Get All Category data
const getAllCategoryData = catchAsync(async (req: Request, res: Response) => {
  const result = await categotyServices.getAllCategoryDataFormDB()
  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Categories retrieved successfully',
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

export const categoryControllers = {
  getAllCategoryData,
}
