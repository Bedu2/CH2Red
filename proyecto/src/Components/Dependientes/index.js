import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Icon, Button, Preloader, Modal } from 'react-materialize';
import * as DependientesActions from '../../Actions/ActionsDependientes';
import * as Rutas from '../../Paths';

class Dependientes extends Component {
  componentDidMount() {
    const idUsuario = this.props.match.params.id;
    this.props.asignarIdUsuario(idUsuario);
    this.props.cargarDependientes(idUsuario);
  }

  mostrarError = () => (
    <div className="center-align">
      <Icon className="red-text text-darken-4" large>error</Icon>
      <h4>Ocurrió un error al cargar los dependientes</h4>
      <p><b>Mensaje:</b> {this.props.error.message}</p>
    </div>
  );

  mostrarMensajeNoDependientes = () => (
    <div className="center-align">
      <Icon large className="grey-text text-lighten-2">people_outline</Icon>
      <h4>No hay dependientes.</h4>
      <p>Puede <Link to={`${Rutas.RUTA_AGREGAR_DEPENDIENTE}${this.props._usuario}`}>crear un dependiente</Link> ahora mismo.</p>
    </div>
  );

  mostrarDependientes = () => (
    <Table>
      <thead>
      <tr>
        <th>Nombre completo</th>
        <th className="hide-on-small-only">Dependencia</th>
        <th className="hide-on-small-only">Edad</th>
      </tr>
      </thead>
      <tbody>
      { this.props.dependientes.map((dependiente) => (
        <tr key={dependiente._id}>
          <td>{dependiente.nombre_completo}</td>
          <td className="hide-on-small-only">{dependiente.dependencia}</td>
          <td className="hide-on-small-only">{dependiente.edad}</td>
          <td><Link to={`${Rutas.RUTA_EDITAR_DEPENDIENTE}${dependiente._id}`}><Icon>edit</Icon></Link></td>
          <td>
            <Modal header="Eliminar dependiente"
                   actions={
                     <div>
                       <Button className="red modal-close"
                               onClick={() => this.props.eliminarDependiente(dependiente._id)}>
                         Sí
                       </Button>
                       <Button className="green modal-close">No</Button>
                     </div> }
                   trigger={<Link to="/"><Icon>delete_forever</Icon></Link>}>
              <p>¿Desea eliminar a {dependiente.nombre_completo}?</p>
            </Modal>
          </td>
        </tr> ))
      }
      </tbody>
    </Table>
  );

  mostrarContenido = () => (
    <div>
      { this.props.dependientes.length ? this.mostrarDependientes() : this.mostrarMensajeNoDependientes() }
    </div>
  );

  render() {
//    this.props.activarRedireccionAInicio(false);
    return (
      <div>
        <div className='valign-wrapper'  >
          <h1>Dependientes</h1>
          <Link to={`${Rutas.RUTA_AGREGAR_DEPENDIENTE}${this.props._usuario}`}>
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

const mapStateToProps = ({ DependientesReducer }) => DependientesReducer;

export default connect(mapStateToProps, DependientesActions)(Dependientes);
