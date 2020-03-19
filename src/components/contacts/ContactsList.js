import React from 'react';
import Contact from './Contact';

const ContactsList = ({ contacts, deleteContact }) => (
  contacts.map( contact => <Contact key={contact.id} {...contact} deleteContact={deleteContact} />)
)
export default ContactsList;