import { createSlice } from "@reduxjs/toolkit";

// booksSlice
const booksSlice = createSlice({
  name: "books",
  initialState: {
    addedBooks: [], 
  },
  reducers: {
    //action for adding new book 
    addBook: (state, action) => {
      state.addedBooks.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;