import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Preloader, Input } from 'react-materialize';
import * as ActionsDependientes from '../../Actions/DependientesActions';
import { RUTA_LISTA_DEPENDIENTES } from "../../Paths";


//import CamposUsuario from './CamposUsuario';

class AgregarEditarDependiente extends Component {
	componentDidMount() {
		if (this.props.match.params.dependienteId) {
			this.props.obtenerDependiente(this.props.match.params.dependienteId);
		}
		else if (this.props.match.params.usuarioId) {
			this.props.asignarIdUsuario(this.props.match.params.usuarioId);
		}
	}

	validarFormularioDependiente = () => (
		this.props.nombre_completo && this.props.edad && this.props.dependencia
	);

	crearNuevoDependiente = () => {
		return {
			nombre_completo: this.props.nombre_completo,
			dependencia: this.props.dependencia,
			edad: this.props.edad,
			_usuario: this.props._usuario
	}};

  cambiarNombreCompleto = (event) => {
    this.props.cambiarNombreCompleto(event.target.value);
  };

  cambiarDependencia = (event) => {
    this.props.cambiarDependencia(event.target.value);
  };

  cambiarEdad = (event) => {
    this.props.cambiarEdad(event.target.value)
  };

	mostrarPreloader = () => (
		<div className="center-align">
			<Preloader/>
		</div>
	);

	mostrarBotonGuardarDependientes = () => (
    <div className="row">
				<Button  className="col s6 offset-m2 m4" waves='light'
								disabled= { !this.validarFormularioDependiente() }
								onClick={ this.clickGuardarDependiente }>
								
					Guardar
				</Button>
				<Link to={`${RUTA_LISTA_DEPENDIENTES}${this.props._usuario}`}>
					<Button className="col s6 m4 red" waves='light'>
						Cancelar
					</Button>
				</Link>
    </div>
  );

	clickGuardarDependiente = event => {
		const datosDependiente = this.crearNuevoDependiente();
		const id = this.props.match.params.dependienteId;
		id ?
			this.props.modificarDependiente(id, datosDependiente) :
			this.props.agregarDependiente(datosDependiente);
	};

	render() {
		return ( this.props.redireccionar ? ( <Redirect to= {`${RUTA_LISTA_DEPENDIENTES}${this.props._usuario}`} />):
			(<div className="row">
        <Input s={12} label="Nombre" type='text' placeholder=' '
               onChange={this.cambiarNombreCompleto} value={this.props.nombre_completo} />
        <Input s={12} m={8} label="Dependencia" type='text' placeholder=' '
               onChange={this.cambiarDependencia} value={ this.props.dependencia } />
        <Input s={12} m={4} label="Edad" type='text' placeholder=' '
               onChange={this.cambiarEdad} value={ this.props.edad } />
				{ this.props.cargando ? this.mostrarPreloader() : this.mostrarBotonGuardarDependientes() }
			</div>)
		);
	}
}

const mapStateToProps = ({ DependientesReducer }) => {
	return DependientesReducer;
};

export default connect(mapStateToProps, ActionsDependientes)(AgregarEditarDependiente);