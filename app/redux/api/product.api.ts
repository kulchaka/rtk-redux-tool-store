import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProducts } from '../../interface/product.type'

export const productApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: (build) => ({
    getProducts: build.query<IProducts[], number>({
      query: (limit: number) => `products?limit=${limit}`,
    }),
  }),
})

export const { useGetProductsQuery } = productApi
