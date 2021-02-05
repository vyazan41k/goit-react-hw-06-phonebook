import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    name: name,
    id: shortid.generate(),
    number: number,
  },
}));

const deleteContact = createAction('contacts/delete');

const filterContacts = createAction('contacts/filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, filterContacts };
