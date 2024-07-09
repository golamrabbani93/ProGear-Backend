import { Router } from 'express'
import { categoryRoute } from '../modules/category/category.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/category',
    route: categoryRoute,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
