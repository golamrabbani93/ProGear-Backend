import { TProduct } from './product.interface'
import { Product } from './product.model'

// * Save Product In databse
const saveProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}

export const productServices = {
  saveProductIntoDB,
}
