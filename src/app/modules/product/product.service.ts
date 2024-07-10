import QueryBuilder from '../../builder/QueryBuilder'
import { ProductSearchableFields } from './product.constant'
import { TProduct } from './product.interface'
import { Product } from './product.model'

// * Save Product In databse
const saveProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}

// * Get all Products Data From Database
const getAllProductDataFormDB = async (query: Record<string, unknown>) => {
  //   const result = await Product.find()
  //   return result
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(ProductSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()
  const result = await productQuery.modelQuery
  return result
}

export const productServices = {
  saveProductIntoDB,
  getAllProductDataFormDB,
}
