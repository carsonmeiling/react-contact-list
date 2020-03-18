import React from 'react';
import {Button} from 'semantic-ui-react';



const Contact = ({ id, firstName, phone }) => (
  <div key={id}>
    <h3>{firstName}</h3>
    <h3>{phone}</h3>
    <Button color='red'>

    </Button>
  </div>

) 

export default Contact;