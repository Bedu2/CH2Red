import axios from 'axios';
import { CAMBIO_NOMBRE, 
	CAMBIO_APELLIDO_PATERNO, 
	CAMBIO_APELLIDO_MATERNO, 
	CAMBIO_EDAD, 
	ERROR_USUARIOS, 
} from '../Types/usuariosTypes';

export const agregarNombre = (nombre) => (dispatch) =>
{
	dispatch({ type: CAMBIO_NOMBRE, payload: nombre });
};

export const agregarApellidoPAterno = (apellidoPaterno) => (dispatch) =>
{
	dispatch({ type: CAMBIO_APELLIDO_PATERNO, payload: apellidoPaterno });
};

export const agregarApellidoMaterno = (apellidoMaterno) => (dispatch) =>
{
	dispatch({ type: CAMBIO_APELLIDO_MATERNO, payload: apellidoMaterno });
};

export const agregarEdad = (edad) => (dispatch) =>
{
	dispatch({ type: CAMBIO_EDAD, payload: edad });
};

export const enviarError = (error) => (dispatch) =>
{
	dispatch({ type: ERROR_USUARIOS, payload: error });
};


