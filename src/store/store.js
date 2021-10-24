import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './booksSlice'
import membersSlice from './membersSlice'

export default configureStore({
  reducer: {
      books: booksSlice,
      members:membersSlice,
  },
})