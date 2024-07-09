import { TProduct } from './product.interface'
import { Product } from './product.model'

// * Save Product In databse
const saveProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}

// * Get all Products Data From Database
const getAllProductDataFormDB = async () => {
  const result = await Product.find()
  return result
}

export const productServices = {
  saveProductIntoDB,
  getAllProductDataFormDB,
}
