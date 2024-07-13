/* eslint-disable no-undef */
import QueryBuilder from '../../builder/QueryBuilder'
import { ProductSearchableFields } from './product.constant'
import { TProduct } from './product.interface'
import { Product } from './product.model'

// * Save Product In databse
const saveProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}
// * Save Product In databse
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true })
  return result
}

// * Get all Products Data From Database
const getAllProductDataFormDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(ProductSearchableFields)
    .filter()
    .sort()
    // .paginate()
    .fields()
  const result = await productQuery.modelQuery
  return result
}

// * Get single product  Data By Bike Id

const getSingleProductDataFromDB = async (id: string) => {
  const result = await Product.findById(id)
  return result
}

const deleteSingleProductDataFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}

export const productServices = {
  saveProductIntoDB,
  getAllProductDataFormDB,
  getSingleProductDataFromDB,
  updateProductIntoDB,
  deleteSingleProductDataFromDB,
}
