import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actoins';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e =>
    dispatch(contactsActions.filterContacts(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
