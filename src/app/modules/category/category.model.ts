import { model, Schema } from 'mongoose'
import { TCategory } from './category.inteface'

// * Category Schema
const categorySchema = new Schema<TCategory>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

// *Export Category Model

export const Category = model<TCategory>('Category', categorySchema)
