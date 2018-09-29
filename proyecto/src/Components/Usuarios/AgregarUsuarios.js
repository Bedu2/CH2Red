import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button } from 'react-materialize';
import * as UsuariosAction from '../../Actions/UsuariosActions';
import CamposUsuario from './CamposUsuario';

class Agregar extends Component {
	componentDidMount() {
	  console.log(this.props.match.path);
	  if (!this.props.consultaUsuarios) {
	  	this.props.cargarUsuarios();
		}
  }

	agregarUsuarios = (event) => {
		this.props.agregarUsuarios(event.target.value);
	};

	agregarNombre = (event) => {
		this.props.agregarNombre(event.target.value);
	};

	agregarApellidoPaterno = (event) => {
		this.props.agregarApellidoPaterno(event.target.value);
	};

	agregarApellidoMaterno = (event) => {
		this.props.agregarApellidoMaterno(event.target.value);
	};

	agregarEdad = (event) => {
		this.props.agregarEdad(event.target.value)
	};

	crearNuevoUsuario = () => {
		return {
		nombre: this.props.nombre,
		apellidos: {
			paterno: this.props.apellidoPaterno,
			materno: this.props.apellidoMaterno
		},
		edad: this.props.edad
	}};

	mostrarBotonEditar = () => (
	  <Link to='/AgregarUsuario/'>
	  <Button style={{width: '100%'}} waves='light'>
      Editar
    </Button>
    </Link>
  );

	mostrarBotonGuardar = () => (
	  <Button style={{width: '100%'}} waves='light'
            disabled= { !this.validarState()}
            onClick={ () => this.props.agregarUsuario(this.crearNuevoUsuario()) }>
    Guardar
    </Button>
  );

	validarState = () => (
		this.props.nombre.length && this.props.apellidoPaterno.length &&
		this.props.apellidoMaterno.length && this.props.edad);

	render() {
		// console.log(this.props); 
		return (
			<div>
				<CamposUsuario/>
				<div className="row">
					<div className="col s6 offset-s3 m4 offset-m4">
						{ this.mostrarBotonGuardar() }
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ UsuariosReducer }) => {
	return UsuariosReducer;
}

export default connect(mapStateToProps, UsuariosAction)(Agregar);