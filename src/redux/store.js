import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";



// making redux store here 
const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;