import { configureStore, createSlice } from "@reduxjs/toolkit";
import books from "../data/books";

const booksSlice = createSlice({
  name: "books",
  initialState: books,
  reducers: {
    addBook: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    },
  },
});

export const { addBook } = booksSlice.actions;
export const store = configureStore({ reducer: { books: booksSlice.reducer } });
