import React from 'react';
import { Icon, Button } from 'react-materialize';

const MensajeError = (props) => (
  <div className="center-align">
    <Icon className="red-text text-darken-4" large>error</Icon>
    <h4>{props.tituloError}</h4>
    <p><b>Mensaje:</b> {props.mensajeError}</p>
    <Button className="red" onClick={props.accion}>Regresar</Button>
  </div>
);

export default MensajeError;