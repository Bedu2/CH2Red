import React, { Component } from 'react';
import { Table, Icon, Button } from 'react-materialize';

class Usuarios extends Component {
	render() {
		return (
			<div>
				<div className='valign-wrapper'  >
					<h1>Usuarios</h1>
					<Button floating large className='red' waves='light' icon='add' />
				</div>
				<Table>
				  <thead>
				    <tr>
				      <th >Nombre</th>
				      <th >Apellido Paterno</th>
				      <th>Apellido Materno</th>
				      <th>Edad</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td>Jose Luis</td>
				      <td>Ramos</td>
				      <td>Gomez</td>
				      <td>54</td>
				      <td><Icon>visibility</Icon></td>
				      <td><Icon>edit</Icon></td>
				      <td><Icon>delete_forever</Icon></td>
				    </tr>
				   
				  </tbody>
				</Table>
			</div>
		);
	}
}

export default Usuarios;