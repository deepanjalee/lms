import { createSlice } from '@reduxjs/toolkit'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: null,
  },
  reducers: {
      setBooks : (state, action) => {
          state.value = action.payload;
      },
      
      updateBook : () => {

      }
  },
})

// Action creators are generated for each case reducer function
export const { setBooks,updateBook  } = booksSlice.actions

export default booksSlice.reducer