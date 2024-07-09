import { Router } from 'express'
import { categoryRoute } from '../modules/category/category.route'
import { productRoutes } from '../modules/product/product.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/category',
    route: categoryRoute,
  },
  {
    path: '/product',
    route: productRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
