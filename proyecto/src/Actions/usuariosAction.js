import axios from 'axios';
import {
  CAMBIO_NOMBRE,
  CAMBIO_APELLIDO_PATERNO,
  CAMBIO_APELLIDO_MATERNO,
  CAMBIO_EDAD,
  ERROR_USUARIOS, USUARIO_SOLO_LECTURA,
	USUARIO_DATOS_COMPLETOS
} from '../Types/usuariosTypes';

export const agregarNombre = (nombre) => (dispatch) =>
{
	dispatch({ type: CAMBIO_NOMBRE, payload: nombre });
	dispatch({ type: USUARIO_DATOS_COMPLETOS });
};

export const agregarApellidoPaterno = (apellidoPaterno) => (dispatch) =>
{
	dispatch({ type: CAMBIO_APELLIDO_PATERNO, payload: apellidoPaterno });
  dispatch({ type: USUARIO_DATOS_COMPLETOS });
};

export const agregarApellidoMaterno = (apellidoMaterno) => (dispatch) =>
{
	dispatch({ type: CAMBIO_APELLIDO_MATERNO, payload: apellidoMaterno });
  dispatch({ type: USUARIO_DATOS_COMPLETOS });
};

export const agregarEdad = (edad) => (dispatch) =>
{
	dispatch({ type: CAMBIO_EDAD, payload: edad });
  dispatch({ type: USUARIO_DATOS_COMPLETOS });
};

export const EnviarError = (error) => (dispatch) =>
{
	dispatch({ type: ERROR_USUARIOS, payload: error });
};

export const habilitarFormulario = (habilitar) => (dispatch) => {
	dispatch({ type: USUARIO_SOLO_LECTURA, payload: !habilitar });
};
