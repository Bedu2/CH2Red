import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button } from 'react-materialize';
import * as UsuariosAction from '../../Actions/usuariosAction';


class Agregar extends Component {
	componentDidMount() {
	  console.log(this.props.match.path);
	  if (this.props.match.path.indexOf('VerUsuario') >= 0) {
      this.props.habilitarFormulario(false);
    } else {
      this.props.habilitarFormulario(true);
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

	mostrarBotonEditar = () => (
	  <Link to='/AgregarUsuario/'>
	  <Button style={{width: '100%'}} waves='light'>
      Editar
    </Button>
    </Link>
  );

	limpiarCampos = () => this.props.reiniciarFormulario();

	mostrarBotonGuardar = () => (
	  <Button style={{width: '100%'}} waves='light'
            disabled= { !this.validarState()}
            onClick={ this.props.reiniciarFormulario }>
    Guardar
    </Button>
  );

	validarState = () => (
		(this.props.nombre.length && this.props.apellidoPaterno.length && this.props.apellidoMaterno.length) > 0 && !isNaN(this.props.edad));


	render() {
		// console.log(this.props); 
		return (
			<div>
				<div className="row">

					<Input s={12} m={6} label="Nombre" type='text' validate
                 disabled={this.props.soloLectura}
                 onChange={this.agregarNombre} value={this.props.nombre} />
					<Input s={12} m={6} label="Apellido Paterno" type='text' validate
                 disabled={this.props.soloLectura}
                 onChange={this.agregarApellidoPaterno} value={ this.props.apellidoPaterno } />
					<Input s={12} m={6} label="Apellido Materno" type='text' validate
                 disabled={this.props.soloLectura}
                 onChange={this.agregarApellidoMaterno} value={ this.props.apellidoMaterno } />
					<Input s={12} m={6} label="Edad" type='number' min='18' max='100' validate
                 disabled={this.props.soloLectura}
                 onChange={this.agregarEdad} value={ this.props.edad } />

				</div>
				<div className="row">
					<div className="col s6 offset-s3 m4 offset-m4">
            			{ this.props.soloLectura ? this.mostrarBotonEditar() : this.mostrarBotonGuardar() }
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