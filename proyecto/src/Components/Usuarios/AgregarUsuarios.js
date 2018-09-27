import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'react-materialize';
import * as UsuariosAction from '../../Actions/usuariosAction';


class Agregar extends Component {

	agregarUsuarios = (event) => {
		this.props.agregarUsuarios(event.target.value);
	};

	agregarNombre = (event) => {
		this.props.agregarNombre(event.target.value);
	};

	agregarApellidoPaterno = (event) => {
		this.props.agregarApellidoPAterno(event.target.value);
	};

	agregarApellidoMaterno = (event) => {
		this.props.agregarApellidoMaterno(event.target.value);
	};

	agregarEdad = (event) => {
		this.props.enviarEdad(event.target.value)
	};


	render() {
		return (
			<div>
				<div className="row">
					<Input s={12} m={6} label="Nombre" type='text' onChange={this.agregarNombre} />
					<Input s={12} m={6} label="Apellido Paterno" type='text' onChange={this.agregarApellidoPaterno} />
					<Input s={12} m={6} label="Apellido Materno" type='text' onChange={this.agregarApellidoMaterno} />
					<Input s={12} m={6} label="Edad" type='text' onChange={this.agregarEdad} />
				</div>
				<div className="row">
					<div className="col s6 offset-s3 m4 offset-m4">
						<Button style={{width: '100%'}} waves='light'>Guardar</Button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ usuariosReducer }) => {


	return usuariosReducer;
}

export default connect(mapStateToProps, UsuariosAction)(Agregar);