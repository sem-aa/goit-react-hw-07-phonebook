// import ids from "short-id";
import { createAction } from "@reduxjs/toolkit";
import types from "./contacts-types";

export const fetchContactRequest = createAction("contacts/fetchContactRequest");
export const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
export const fetchContactError = createAction("contacts/fetchContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

// const addContact = createAction(types.ADD, (data) => {
//   return {
//     payload: {
//       id: ids.generate(),
//       name: data.name,
//       number: data.number,
//     },
//   };
// });
export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");
// export const deleteContact = createAction(types.DELETE);

export const changeFilter = createAction(types.FILTER);

// Без библиотеки Redux Toolkit:
// const addContact = (data) => ({
//   type: types.ADD,
//   payload: {
//     id: ids.generate(),
//     name: data.name,
//     number: data.number,
//   },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const filter = (value) => ({
//   type: types.FILTER,
//   payload: value,
// });
