import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "../actions";

const initialState = {
  items: JSON.parse(localStorage.getItem("contacts")) ?? [
    { id: "id-1", name: "Ron Weasley", number: "459-12-56" },
    { id: "id-2", name: "Hermione Granger", number: "443-89-12" },
    { id: "id-3", name: "Harry Potter", number: "443-88-41" },
    { id: "id-4", name: "Albus Dumbledore", number: "645-17-79" },
    { id: "id-5", name: "Severus Snape", number: "227-91-26" },
    { id: "id-6", name: "Draco Malfoy", number: "459-12-56" },
    { id: "id-9", name: "Tom Riddle", number: "443-89-12" },
    { id: "id-10", name: "Minerva McGonagal", number: "443-89-12" },
  ],
  filter: "",
};

export const contacts = createReducer(initialState, {
  [addContact]: (state, action) => ({
    ...state,
    items: [...state.items, action.payload],
  }),
  [deleteContact]: (state, action) => ({
    ...state,
    items: [...state.items.filter(({ id }) => id !== action.payload)],
  }),
  [changeFilter]: (state, action) => ({ ...state, filter: action.payload }),
});
