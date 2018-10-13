import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Button, Preloader, Modal, Card, Col , Row} from 'react-materialize';
import MensajeError from '../MensajeError';
import FormularioDependienteIncompleto from './FormularioDependienteIncompleto';
import * as DependientesActions from '../../Actions/DependientesActions';
import * as Rutas from '../../Paths';

class Dependientes extends Component {
  componentDidMount() {
    const idUsuario = this.props.match.params.id;
    this.props.asignarIdUsuario(idUsuario);
    this.props.cargarDependientes(idUsuario);
    this.props.asignarNombreUsuario(idUsuario);
    this.props.activarRedireccion(false);
  }

  mostrarError = () => (
    <MensajeError tituloError={'Ocurrió un error al cargar los dependientes'}
                  mensajeError={this.props.error.message}
                  accion={() => this.props.limpiarError}/>
  );

  mostrarMensajeNoDependientes = () => (
    <div className="center-align">
      <Icon large className="grey-text text-lighten-2">people_outline</Icon>
      <h4>No hay dependientes.</h4>
      <p>Puede <Link to={`${Rutas.RUTA_AGREGAR_DEPENDIENTE}${this.props._usuario}`}>crear un dependiente</Link> ahora mismo.</p>
    </div>
  );

  mostrarDependientes = () => (
  <Row>
  { this.props.dependientes.map((dependiente) => (
    <Col s={6} m={4}>
      <Card key={dependiente._id} title={dependiente.nombre_completo} actions={[
        <div className='valign-wrapper'>
          <Link to={`${Rutas.RUTA_EDITAR_DEPENDIENTE}${dependiente._id}`}><Icon>edit</Icon></Link>
          <Modal header="Eliminar dependiente"
                 actions={
                   <div>
                     <Button className="red modal-close"
                             onClick={() => this.props.eliminarDependiente(dependiente._id)}>
                       Sí
                     </Button>
                     <Button className="green modal-close">No</Button>
                   </div> }
                 trigger={
                   <Link to={`${Rutas.RUTA_LISTA_DEPENDIENTES}${this.props._usuario}`}>
                     <Icon>delete_forever</Icon>
                   </Link>}>
           <p>¿Desea eliminar a {dependiente.nombre_completo}?</p>
          </Modal>
        </div>]}>

        <p>{dependiente.edad} año{dependiente.edad === 1 ? '' : 's'}</p>
        <p>{dependiente.dependencia}</p>
      </Card>
    </Col>))}
  </Row>
  );

  mostrarContenido = () => (
    <div>
      { this.validarFormulario() ? <FormularioDependienteIncompleto /> : '' }
      { this.props.dependientes.length ? this.mostrarDependientes() : this.mostrarMensajeNoDependientes() }
    </div>
  );

  validarFormulario = () => (this.props.nombre_completo || this.props.dependencia || this.props.edad);

  render() {
    this.props.activarRedireccion(false);
    return (
      <div>
        <div>
          <div>
            <h1>{this.props.nombre_usuario}</h1>
            <h3>Dependientes
              <Link to={`${Rutas.RUTA_AGREGAR_DEPENDIENTE}${this.props._usuario}`}>
                <Button floating large className='red lighten-1' waves='light' icon='add' />
              </Link>
            </h3>
          </div>
          {
            this.props.cargando ?
              ( <div className="center-align"><Preloader/></div> ) :
              ( this.props.error ? this.mostrarError() : this.mostrarContenido() )
          }
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ DependientesReducer }) => DependientesReducer;

export default connect(mapStateToProps, DependientesActions)(Dependientes);
