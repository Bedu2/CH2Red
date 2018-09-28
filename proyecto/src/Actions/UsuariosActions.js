import axios from 'axios';
import {
  CARGANDO_USUARIOS,
  USUARIOS_CARGADOS,
  ERROR_USUARIOS,
  CAMBIO_APELLIDO_PATERNO,
  CAMBIO_EDAD, CAMBIO_NOMBRE, CAMBIO_APELLIDO_MATERNO,
  USUARIO_SOLO_LECTURA
} from "../Types/UsuariosTypes";

export const cargarUsuarios = () => async (dispatch) => {
  dispatch({ type: CARGANDO_USUARIOS });
  try {
    const response = await axios.get('https://g2-ch2.herokuapp.com/api/usuarios/red');
    response.data.reverse();
    dispatch({ type: USUARIOS_CARGADOS, payload: response.data });
  }
  catch (err) {
    dispatch({ type: ERROR_USUARIOS, payload: err })
  }
};

export const eliminarUsuario = (id) => async (dispatch) => {
  dispatch({ type: CARGANDO_USUARIOS });
  try {
    const response = await axios.delete(`https://g2-ch2.herokuapp.com/api/usuarios/red/${id}`);

  }
  catch (err) {
    dispatch({ type: ERROR_USUARIOS, payload: err })
  }
};

export const agregarNombre = (nombre) => (dispatch) =>
{
  dispatch({ type: CAMBIO_NOMBRE, payload: nombre });
};

export const agregarApellidoPaterno = (apellidoPaterno) => (dispatch) =>
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

export const habilitarFormulario = (habilitar) => (dispatch) => {
  dispatch({ type: USUARIO_SOLO_LECTURA, payload: !habilitar });
};
