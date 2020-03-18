import React, {Component} from 'react';
import ContactsList from './components/contacts/ContactsList';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'Fred', phone: '8011231234' },
    { id: 2, firstName: 'Owen', phone: '8011456234' },
    { id: 3, firstName: 'Jack', phone: '8011889999' },
  ]}

  render() {
    const { contacts } = this.state
    return(
      <div>
        <h1>React Contact List</h1>
        <ContactsList  contacts={contacts}/>
      </div>
    )
  }


}

export default App;
