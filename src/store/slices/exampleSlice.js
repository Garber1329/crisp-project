import { createSlice } from '@reduxjs/toolkit'

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: 0,
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement(state) {
      state.value -= 1
    },
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase('products/fetch/pending', (state) => {
        state.status = 'loading'
      })
      .addCase('products/fetch/fulfilled', (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase('products/fetch/rejected', (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { increment, decrement, setItems } = exampleSlice.actions
export default exampleSlice.reducer
