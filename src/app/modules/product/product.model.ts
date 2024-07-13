import { Schema, model } from 'mongoose'
import { TProduct } from './product.interface'

// * Product Schema
const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 4,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
)

// *Export Product Model

export const Product = model<TProduct>('Product', productSchema)
