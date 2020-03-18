import React from 'react';
import {Button, Table} from 'semantic-ui-react';



const Contact = ({ id, firstName, phone }) => (
  //  key={id}>
  //   <h3>{firstName}</h3>
  //   <h3>{phone}</h3>
  //   <Button color='twitter'>

  //   </Button>
  // </div>

  
<Table.Row>
  <Table.Cell>{id}</Table.Cell>
  <Table.Cell>{firstName}</Table.Cell>
  <Table.Cell>{phone}</Table.Cell>
  <Table.Cell>
    <Button color='twitter'>Delete</Button>
  </Table.Cell>

</Table.Row>
) 

export default Contact;