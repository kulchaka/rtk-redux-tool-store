import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './api/product.api'

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer },
})
