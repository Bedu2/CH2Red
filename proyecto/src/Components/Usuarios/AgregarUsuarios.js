import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Preloader } from 'react-materialize';
import * as UsuariosAction from '../../Actions/UsuariosActions';
import CamposUsuario from './CamposUsuario';

class Agregar extends Component {
	componentDidMount() {
	  console.log(this.props.match);
	  if (this.props.match.params.id){
			this.props.obtenerUsuario(this.props.match.params.id)
		}
	  if (!this.props.consultaUsuarios) {
	  	this.props.cargarUsuarios();
		}
  }

	crearNuevoUsuario = () => {
		return {
		nombre: this.props.nombre,
		apellidos: {
			paterno: this.props.apellidoPaterno,
			materno: this.props.apellidoMaterno
		},
		edad: this.props.edad
	}};

	mostrarPreloader = () => (
		<div className="center-align">
			<Preloader/>
		</div>
	);

	mostrarBotonEditar = () => (
	  <Link to='/AgregarUsuario/'>
			<Button style={{width: '100%'}} waves='light'>
				Editar
			</Button>
    </Link>
  );

	mostrarBotonGuardar = () => (
    <div className="row">
      <div className="col s6 offset-s3 m4 offset-m4">
				<Button style={{width: '100%'}} waves='light'
								disabled= { !this.props.validarFormulario }
								onClick={ this.clickGuardar }>
					Guardar
				</Button>
      </div>
    </div>
  );

	clickGuardar = event => {
		const datosUsuario = this.crearNuevoUsuario();
		const idUsuario = this.props.match.params.id;
		idUsuario ? this.props.modificarUsuario(idUsuario, datosUsuario) : this.props.agregarUsuario(datosUsuario);
	};

	render() {
		// console.log(this.props); 
		return (
			<div>
				<CamposUsuario/>
						{ this.props.cargando ? this.mostrarPreloader() : this.mostrarBotonGuardar() }
			</div>
		);
	}
}

const mapStateToProps = ({ UsuariosReducer }) => {
	return UsuariosReducer;
}

export default connect(mapStateToProps, UsuariosAction)(Agregar);