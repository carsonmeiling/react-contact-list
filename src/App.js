import React, {Component} from 'react';
import ContactsList from './components/contacts/ContactsList';
import ContactForm from './components/contacts/ContactForm';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'Fred', phone: '801-123-1234' },
    { id: 2, firstName: 'Owen', phone: '801-145-6234' },
    { id: 3, firstName: 'Jack', phone: '801-188-9999' },
  ]}

  deleteContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if (contact.id !== id)
        return contact
    })
    this.setState({ contacts })
  }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  addContact = (incomingContact) => {
    let newContact = { id: this.getId(), ...incomingContact} 
    this.setState({ contacts: [newContact, ...this.state.contacts ]})
  }

  render() {
    const { contacts } = this.state
    return(
      <div>
        <h1>React Contact List</h1>
        <ContactForm addContact={this.addContact} />
        <ContactsList  contacts={contacts} deleteContact={this.deleteContact}/>
      </div>
    )
  }


}

export default App;
