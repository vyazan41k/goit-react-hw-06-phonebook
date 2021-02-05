import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actoins';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputFormChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();

    const duplicate = this.props.contacts.items.find(
      contact => contact.name === this.state.name,
    );

    duplicate
      ? alert(`${this.state.name} is already in contacts.`)
      : this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputFormChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.inputFormChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(contactsActions.addContact(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
