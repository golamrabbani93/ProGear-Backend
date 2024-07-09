import { z } from 'zod'

const createProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be string',
        required_error: 'Name is required',
      })
      .min(1, { message: 'Name is required And Name must be string' }),
    description: z
      .string({
        invalid_type_error: 'Description must be string',
        required_error: 'Description is required',
      })
      .min(1, { message: 'Description is required' }),
    price: z
      .number({
        invalid_type_error: 'Price must be Number',
        required_error: 'Price is required',
      })
      .positive('Price must be a positive number'),
    category: z
      .string({
        invalid_type_error: 'Category must be String',
        required_error: 'Category is required',
      })
      .min(1, { message: 'Category is required' }),
    image: z.string(),
    brand: z.string(),
    quantity: z
      .number({
        invalid_type_error: 'Product Quantity must be Number',
        required_error: 'Product Quantity  is required',
      })
      .min(1, {
        message: 'Quantity must be a non-negative number and minimum 1',
      }),
  }),
})

export const productValidation = {
  createProductValidationSchema,
}
