import { createSlice } from "@reduxjs/toolkit";

// booksSlice — manages ONLY newly added books state
const booksSlice = createSlice({
  name: "books",
  initialState: {
    addedBooks: [], // only stores user-added books
  },
  reducers: {
    // addBook — adds new book at the beginning of addedBooks
    addBook: (state, action) => {
      state.addedBooks.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;