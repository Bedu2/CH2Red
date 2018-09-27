import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table ,Preloader, Button, Icon } from 'react-materialize';
import { Agregar } from './AgregarUsuarios';


class Usuarios extends Component {
	render() {
		return (
			<div>
				<div className='valign-wrapper'  >
					<h1>Usuarios</h1>
					<Link to='/AgregarUsuarios'>
						<Button floating large className='red' waves='light' icon='add' />
					</Link>
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