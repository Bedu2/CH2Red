import React from 'react';
import { Icon } from 'react-materialize';
import { connect } from 'react-redux';
import * as UsuariosActions from "../../Actions/UsuariosActions";

const FormularioIncompleto = (props) => (
  <div className="row">
    <div className="col s8 m2 offset-s2 offset-m2 center-align">
      <Icon large className="amber-text">warning</Icon>
    </div>
    <div className="col s8 m6">
      <h5>Hay un usuario pendiente</h5>
      <ul>
        { props.nombre ? (<li>Nombre: <b>{props.nombre}</b></li>) : '' }
        { props.apellidoPaterno ? (<li>Apellido paterno: <b>{props.apellidoPaterno}</b></li>) : '' }
        { props.apellidoMaterno ? (<li>Apellido materno: <b>{props.apellidoMaterno}</b></li>) : '' }
        { props.edad ? (<li>Edad: <b>{props.edad}</b></li>) : '' }
      </ul>
    </div>
  </div>
);

const mapStateToProps = ({ UsuariosReducer }) => UsuariosReducer;

export default connect(mapStateToProps, UsuariosActions) (FormularioIncompleto);