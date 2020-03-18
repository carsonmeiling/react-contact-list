import React from 'react';
import Contact from './Contact';

const ContactsList = ({ contacts }) => (
  contacts.map( contact => <Contact key={contact.id} {...contact} />)
)
export default ContactsList;