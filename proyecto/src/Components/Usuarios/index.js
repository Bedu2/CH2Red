import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Icon, Button, Preloader } from 'react-materialize';
import * as UsuariosActions from '../../Actions/UsuariosActions';

class Usuarios extends Component {
  componentDidMount() {
    if (!this.props.consultaUsuarios) {
      this.props.cargarUsuarios();
    }
  }

  mostrarMensajeNoUsuarios = () => (
      <div className="center-align">
        <h4>No hay usuarios.</h4>
        <p>Puede <Link to="/agregarUsuario">crear un usuario</Link> ahora mismo.</p>
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
          <tr>
            <td className="hide-on-med-and-up">{this.obtenerNombreCompleto(usuario)}</td>
            <td className="hide-on-small-only">{usuario.nombre}</td>
            <td className="hide-on-small-only">{usuario.apellidos.paterno}</td>
            <td className="hide-on-small-only">{usuario.apellidos.materno}</td>
            <td className="hide-on-small-only">{usuario.edad}</td>
            <td><Link to={`/verUsuario/${usuario.id}`}><Button icon="visibility"/></Link></td>
            <td><Link to={`/editarUsuario/${usuario.id}`}><Button icon="edit"/></Link></td>
            <td>
              <Modal header="Eliminar usuario">
                actions={
                <div>
                  <Button className="red modal-close">Sí</Button>&nbsp;
                  <Button className="green modal-close">No</Button>
                </div>}
                trigger={<Button icon="delete_forever"/>}>
                <p>¿Desea eliminar a {usuario.nombre}?</p>
              </Modal>
            </td>
            <td><Link to={`/eliminarUsuario/${usuario.id}`}><Button icon="delete_forever"/></Link></td>
          </tr> ))
      }
      </tbody>
    </Table>
  );

  obtenerNombreCompleto = (usuario) =>
    `${usuario.nombre} ${usuario.apellidos.paterno} ${usuario.apellidos.materno}`;

  render() {
    return (
      <div>
        <div className='valign-wrapper'  >
          <h1>Usuarios</h1>
          <Link to="/agregarUsuario">
            <Button floating large className='red' waves='light' icon='add' />
          </Link>
        </div>
        { this.props.cargando ?
          (<Preloader className="center-align"/>) : (
            this.props.usuarios.length ?
              this.mostrarUsuarios() :
              this.mostrarMensajeNoUsuarios()
          )
        }
      </div>
    );
  };
}

const mapStateToProps = ({ UsuariosReducer }) => UsuariosReducer;

export default connect(mapStateToProps, UsuariosActions)(Usuarios);
