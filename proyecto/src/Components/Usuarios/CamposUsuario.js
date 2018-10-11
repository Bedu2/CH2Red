import React from 'react';
import { Input } from 'react-materialize';
import { connect } from 'react-redux';
import * as UsuariosActions from '../../Actions/UsuariosActions';

const CamposUsuario = (props) => {
  const cambiarNombre = (event) => props.cambiarNombre(event.target.value);

  const cambiarApellidoPaterno = (event) => props.cambiarApellidoPaterno(event.target.value);

  const cambiarApellidoMaterno = (event) => props.cambiarApellidoMaterno(event.target.value);

  const cambiarEdad = (event) => props.cambiarEdad(event.target.value);

  return (
    <div className="row">
      <Input s={12} m={6} label="Nombre" type='text' placeholder=' '
             onChange={cambiarNombre} value={props.nombre} />
      <Input s={12} m={6} label="Apellido Paterno" type='text' placeholder=' '
             onChange={cambiarApellidoPaterno} value={ props.apellidoPaterno } />
      <Input s={12} m={6} label="Apellido Materno" type='text' placeholder=' '
             onChange={cambiarApellidoMaterno} value={ props.apellidoMaterno } />
      <Input s={12} m={6} label="Edad" type='text' placeholder=' '
             onChange={cambiarEdad} value={ props.edad.toLocaleString() } />
    </div>
  );
};

const mapStateToProps = ({ UsuariosReducer }) => UsuariosReducer;

export default connect(mapStateToProps, UsuariosActions) (CamposUsuario);