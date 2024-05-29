import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filter/selectors";
export const selectContacts =     state => state.contacts.items;
export const selectIsLoading =    state => state.contacts.isLoading;
export const selectError =        state => state.contacts.error;
//export const selectStatusFilter = state => state.filters.status;
//export const selectorSearch =     state => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter(({name}) =>
            name.toLowerCase().includes(filter.toLowerCase())
        );
}
)
