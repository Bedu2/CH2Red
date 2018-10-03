import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Icon, Button, Preloader, Modal } from 'react-materialize';
import * as UsuariosActions from '../../Actions/UsuariosActions';
import * as Rutas from '../../Paths';
import FormularioUsuarioIncompleto from './FormularioUsuarioIncompleto';

class Usuarios extends Component {
  componentDidMount() {
    console.log(this.props);
    if (!this.props.consultaUsuarios) {
      this.props.cargarUsuarios();
    }
  }

  mostrarError = () => (
    <div className="center-align">
      <Icon className="red-text text-darken-4" large>error</Icon>
      <h4>Ocurrió un error al cargar los usuarios</h4>
      <p><b>Mensaje:</b> {this.props.error.message}</p>
    </div>
  );

  mostrarMensajeNoUsuarios = () => (
      <div className="center-align">
        <Icon large className="grey-text text-lighten-2">person_outline</Icon>
        <h4>No hay usuarios.</h4>
        <p>Puede <Link to={Rutas.RUTA_AGREGAR_USUARIO}>crear un usuario</Link> ahora mismo.</p>
      </div>
    );

  mostrarUsuarios = () => (
    <Table>
      <thead>
      <tr>
        <th className="hide-on-med-and-up">Nombre completo</th>
        <th className="hide-on-small-only">Nombre</th>
        <th className="hide-on-small-only">Apellido Paterno</th>
        <th className="hide-on-small-only">Apellido Materno</th>
        <th className="hide-on-small-only">Edad</th>
      </tr>
      </thead>
      <tbody>
      { this.props.usuarios.map((usuario) => (
          <tr key={usuario._id}>
            <td className="hide-on-med-and-up">{this.obtenerNombreCompleto(usuario)}</td>
            <td className="hide-on-small-only">{usuario.nombre}</td>
            <td className="hide-on-small-only">{usuario.apellidos.paterno}</td>
            <td className="hide-on-small-only">{usuario.apellidos.materno}</td>
            <td className="hide-on-small-only">{usuario.edad}</td>
            <td><Link to={`${Rutas.RUTA_LISTA_DEPENDIENTES}${usuario._id}`}><Icon>visibility</Icon></Link></td>
            <td><Link to={`${Rutas.RUTA_EDITAR_USUARIO}${usuario._id}`}><Icon>edit</Icon></Link></td>
            <td>
              <Modal header="Eliminar usuario"
                     actions={
                      <div>
                        <Button className="red modal-close"
                                onClick={() => this.props.eliminarUsuario(usuario._id)}>
                          Sí
                        </Button>
                        <Button className="green modal-close">No</Button>
                      </div> }
                     trigger={<Link to="/"><Icon>delete_forever</Icon></Link>}>
                <p>¿Desea eliminar a {usuario.nombre}?</p>
              </Modal>
            </td>
          </tr> ))
      }
      </tbody>
    </Table>
  );

  mostrarContenido = () => (
    <div>
      { this.validarFormulario() ? <FormularioUsuarioIncompleto/> : '' }
      { this.props.usuarios.length ? this.mostrarUsuarios() : this.mostrarMensajeNoUsuarios() }
    </div>
  );

  validarFormulario = () =>
    this.props.nombre || this.props.apellidoPaterno || this.props.apellidoMaterno || this.props.edad;

  obtenerNombreCompleto = (usuario) =>
    `${usuario.nombre} ${usuario.apellidos.paterno} ${usuario.apellidos.materno}`;

  render() {
    this.props.activarRedireccionAInicio(false);
    return (
      <div>
        <div className='valign-wrapper'  >
          <h1>Usuarios</h1>
          <Link to={Rutas.RUTA_AGREGAR_USUARIO}>
            <Button floating large className='red' waves='light' icon='add' />
          </Link>
        </div>
        { this.props.cargando ?
          (<div className="center-align"><Preloader/></div>) : (
            this.props.error ? this.mostrarError() : this.mostrarContenido()
          )
        }
      </div>
    );
  };
}

const mapStateToProps = ({ UsuariosReducer }) => UsuariosReducer;

export default connect(mapStateToProps, UsuariosActions)(Usuarios);
