import { Category } from './category.model'

// * Get all Category Data From Database
const getAllCategoryDataFormDB = async () => {
  const result = await Category.find()
  return result
}

export const categotyServices = {
  getAllCategoryDataFormDB,
}
