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
    stock: z
      .number({
        invalid_type_error: 'Product Stock must be Number',
        required_error: 'Product Stock is required',
      })
      .min(1, {
        message: 'Product Stock must be a non-negative number and minimum 1',
      }),
  }),
})

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be string',
        required_error: 'Name is required',
      })
      .min(1, { message: 'Name is required And Name must be string' })
      .optional(),
    description: z
      .string({
        invalid_type_error: 'Description must be string',
        required_error: 'Description is required',
      })
      .min(1, { message: 'Description is required' })
      .optional(),
    price: z
      .number({
        invalid_type_error: 'Price must be Number',
        required_error: 'Price is required',
      })
      .positive('Price must be a positive number')
      .optional(),
    category: z
      .string({
        invalid_type_error: 'Category must be String',
        required_error: 'Category is required',
      })
      .min(1, { message: 'Category is required' })
      .optional(),
    image: z.string().optional(),
    brand: z.string().optional(),
    stock: z
      .number({
        invalid_type_error: 'Product Stock must be Number',
        required_error: 'Product Stock is required',
      })
      .min(1, {
        message: 'Product Stock must be a non-negative number and minimum 1',
      })
      .optional(),
  }),
})

export const productValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
}
