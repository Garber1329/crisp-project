import { createAsyncThunk } from '@reduxjs/toolkit'
import products from '../../data/productsData.json'

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (_, thunkAPI) => {
    try {
      // Return local JSON data for development/demo purposes
      return products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || 'Fetch failed')
    }
  }
)

export default fetchProducts
