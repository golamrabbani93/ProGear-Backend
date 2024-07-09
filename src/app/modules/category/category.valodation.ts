import { z } from 'zod'

export const categoryValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be string',
        required_error: 'Name is required',
      })
      .min(1, { message: 'Name is required And Name must be string' }),
    image: z
      .string({
        invalid_type_error: 'Image URL must be string',
        required_error: 'Image URL is required',
      })
      .min(1, { message: 'Image is required And Image must be string' }),
  }),
})
