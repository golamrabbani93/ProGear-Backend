import { FilterQuery, Query } from 'mongoose'

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>
  public query: Record<string, unknown>

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery
    this.query = query
  }
  //   ! Search Query
  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      })
    }

    return this
  }
  //  * Filter Query
  filter() {
    const queryObj = { ...this.query } // copy

    // Filtering
    const excludeFields = [
      'searchTerm',
      'sort',
      'limit',
      'page',
      'fields',
      'min',
      'max',
    ]

    excludeFields.forEach((el) => delete queryObj[el])

    // Advanced filtering for category, price, brand, and rating
    const queryStr = JSON.stringify(queryObj)
    const queryStrUpdated = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`,
    )

    const parsedQueryObj = JSON.parse(queryStrUpdated)

    // * Filtering by specific fields if provided
    if (queryObj.category) {
      parsedQueryObj.category = {
        $regex: new RegExp(queryObj.category as string, 'i'),
      }
    }

    if (queryObj.brand) {
      parsedQueryObj.brand = {
        $regex: new RegExp(queryObj.brand as string, 'i'),
      }
    }

    if (queryObj.rating) {
      parsedQueryObj.rating = { $gte: Number(queryObj.rating) }
    }

    if (this.query.min && this.query.max) {
      const minPrice = Number(this.query.min)
      const maxPrice = Number(this.query.max)

      parsedQueryObj.price = {
        $gte: minPrice,
        $lte: maxPrice,
      }
    }

    this.modelQuery = this.modelQuery.find(parsedQueryObj as FilterQuery<T>)

    return this
  }
  //  * Sort Query
  sort() {
    const sort =
      (this?.query?.sort as string)?.split(',')?.join(' ') || '-createdAt'
    this.modelQuery = this.modelQuery.sort(sort as string)

    return this
  }
  //  * Paginatio Query
  //   paginate() {
  //     const page = Number(this?.query?.page) || 1
  //     const limit = Number(this?.query?.limit) || 10
  //     const skip = (page - 1) * limit

  //     this.modelQuery = this.modelQuery.skip(skip).limit(limit)

  //     return this
  //   }
  //  * Fields Query
  fields() {
    const fields =
      (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v'

    this.modelQuery = this.modelQuery.select(fields)
    return this
  }
}

export default QueryBuilder
