import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Preloader } from 'react-materialize';

import CamposUsuario from './CamposUsuario';

class AgregarEditarDependiente extends Component {

	validarFormularioDependiente = () => (
  		this.props.nombre_completo && this.props.edad && this.props.idUsuario
	);
	

	crearNuevoDependiente = () => {
		return {
		nombre_completo: this.props.nombre_completo
		edad: this.props.edad
	}};

	mostrarPreloaderDependientes = () => (
		<div className="center-align">
			<Preloader/>
		</div>
	);

	mostrarBotonEditarDependientes = () => (
	  <Link to='/AgregarEditarDependientes/'>
			<Button style={{width: '100%'}} waves='light'>
				Editar
			</Button>
    </Link>
  );

	mostrarBotonGuardarDependientes = () => (
    <div className="row">
      <div className="col s6 offset-s3 m4 offset-m4">
				<Button style={{width: '100%'}} waves='light'
								disabled= { !this.props.validarFormularioDependiente }
								onClick={ this.clickGuardarDependiente }>
					Guardar
				</Button>
      </div>
    </div>
  );

	clickGuardarDependiente = event => {
		const datosDependiente = this.crearNuevoDependiente();
		const id = this.props.match.params.id;
		id ? this.props.modificarDependiente(idUsuario, id, datosDependiente) : this.props.agregarDependiente(datosDependiente);
	};

	render() {
		// console.log(this.props); 
		return (
			<div>
				<CamposDependiente/>
						{ this.props.cargando ? this.mostrarPreloader() : this.mostrarBotonGuardarDependientes() }
			</div>
		);
	}
}

const mapStateToProps = ({ DependientesReducer }) => {
	return UsuariosReducer;
}

export default connect(mapStateToProps, ActionDependientes)(AgregarEditarDependiente);