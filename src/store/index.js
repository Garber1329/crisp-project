import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './slices/exampleSlice'
import blogReducer from './slices/blogSlice'
import loginSlice from './slices/loginSlice'

const store = configureStore({
  reducer: {
    example: exampleReducer,
    blogsSlice: blogReducer,
    loginSlice: loginSlice
  },
})

export default store
