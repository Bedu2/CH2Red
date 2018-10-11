import React from 'react';
import { Icon, Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import * as DependientesActions from "../../Actions/DependientesActions";

const FormularioIncompleto = (props) => (
  <Row>
    <Col s={8} m={2} className="offset-s2 offset-m2 center-align">
      <Icon large className="amber-text">warning</Icon>
    </Col>
    <Col s={8} m={6}>
      <h5>Hay un dependiente sin terminar</h5>
      <ul>
        { props.nombre_completo ? (<li>Nombre: <b>{props.nombre_completo}</b></li>) : '' }
        { props.dependencia ? (<li>Apellido paterno: <b>{props.dependencia}</b></li>) : '' }
        { props.edad ? (<li>Edad: <b>{props.edad}</b></li>) : '' }
      </ul>
    </Col>
  </Row>
);

const mapStateToProps = ({ DependientesReducer }) => DependientesReducer;

export default connect(mapStateToProps, DependientesActions) (FormularioIncompleto);