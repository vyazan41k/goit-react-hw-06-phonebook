import React, { Component } from 'react';
// import shortid from 'shortid';

import Form from './components/Form';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';

class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsContacts = JSON.parse(contacts);

  //   if (parsContacts) {
  //     this.setState({ contacts: parsContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContact = ({ name, number }) => {
  //   const nameId = shortid.generate();
  //   const duplicate = this.state.contacts.find(
  //     contact => contact.name === name,
  //   );

  //   duplicate
  //     ? alert(`${name} is already in contacts.`)
  //     : this.setState(({ contacts }) => ({
  //         contacts: [...contacts, { name: name, id: nameId, number: number }],
  //       }));
  // };

  // deleteContact = id => {
  //   this.setState(prev => ({
  //     contacts: prev.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  // filterContact = () => {
  //   const { filter, contacts } = this.state;
  //   const normalFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalFilter),
  //   );
  // };

  // changeFiltr = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  render() {
    // const { filter } = this.state;
    // const foundName = this.filterContact();

    return (
      <div>
        <h3>Phonebook</h3>
        <Form />
        <h3>Contacts</h3>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

export default App;
