import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Preloader } from 'react-materialize';
import { Redirect } from 'react-router-dom';
import * as UsuariosAction from '../../Actions/UsuariosActions';
import CamposUsuario from './CamposUsuario';

const EDAD_MINIMA = 16;
const EDAD_MAXIMA = 150;

class AgregarEditar extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      // Si `params` tiene `id`, se está editando un usuario existente:
      // obtenerlo de la BD.
      this.props.obtenerUsuario(this.props.match.params.id)
    }
    else if (!this.props.id_usuario) {
      // Si `id_usuario` tiene un valor asignado, hay una edición de usuario
      // pendiente; pero si `params` no tiene `id`, se está creando un usuario
      // nuevo, así que se descartan los datos del usuario ya existente y el
      // formulario aparece en blanco.
      this.props.limpiarFormulario();
    }
  }

  crearNuevoUsuario = () => ({
    nombre: this.props.nombre,
    apellidos: {
      paterno: this.props.apellidoPaterno,
      materno: this.props.apellidoMaterno
    },
    edad: this.props.edad
  });

  mostrarPreloader = () => (
    <div className="center-align">
      <Preloader/>
    </div>
  );

  mostrarBotonGuardar = () => (
    <div className="row">
      <Button className="col s6 offset-m2 m4" waves='light'
              disabled={ !this.validarFormulario() }
              onClick={ this.clickGuardar }>
        Guardar
      </Button>
      <Button className="col s6 m4 red" waves='light'
              onClick={ () => this.props.activarRedireccionAInicio(true) }>
        Cancelar
      </Button>
    </div>
  );

  validarFormulario = () =>
    this.props.nombre && this.props.apellidoPaterno && this.props.apellidoMaterno && this.props.edad;

  clickGuardar = () => {
    const edad = this.props.edad;
    if (edad < EDAD_MINIMA) {
      window.Materialize.toast(`La edad mínima válida es de ${EDAD_MINIMA} años.`, 4000);
      this.props.cambiarEdad('');
      return;
    }
    if (edad > EDAD_MAXIMA) {
      window.Materialize.toast(`La edad máxima válida es de ${EDAD_MAXIMA} años.`, 4000);
      this.props.cambiarEdad('');
      return;
    }
    const datosUsuario = this.crearNuevoUsuario();
    const idUsuario = this.props.match.params.id;
    idUsuario ? this.props.modificarUsuario(idUsuario, datosUsuario) : this.props.agregarUsuario(datosUsuario);
  };

  render() {
    return this.props.redireccionar ?
    ( <Redirect to='/' /> ) :
    ( <div>
        <CamposUsuario/>
        { this.props.cargando ? this.mostrarPreloader() : this.mostrarBotonGuardar() }
      </div> );
  }
}

const mapStateToProps = ({ UsuariosReducer }) => UsuariosReducer;

export default connect(mapStateToProps, UsuariosAction)(AgregarEditar);