import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.items;

const getVisibleContact = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);
const selectors = {
  getVisibleContact,
  getFilter,
  getAllContacts,
};

export default selectors;
