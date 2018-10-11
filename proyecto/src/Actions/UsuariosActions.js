import axios from 'axios';
import {
  INICIANDO_PROCESO_USUARIOS,
  USUARIOS_CARGADOS,
  USUARIO_CREADO,
  USUARIO_MODIFICADO,
  USUARIO_ELIMINADO,
  ERROR_USUARIOS,
  CAMBIO_NOMBRE,
  CAMBIO_APELLIDO_PATERNO,
  CAMBIO_APELLIDO_MATERNO,
  CAMBIO_EDAD,
  LIMPIAR_FORMULARIO,
  USUARIO_CARGADO,
  REDIRECCIONAR, LIMPIAR_ERROR_USUARIOS
} from "../Types/usuariosTypes";

const TIEMPO_TOAST = 4000;

export const cargarUsuarios = () => async (dispatch) => {
  dispatch({ type: INICIANDO_PROCESO_USUARIOS });
  try {
    const response = await axios.get('https://g2-ch2.herokuapp.com/api/usuarios/red');
    response.data.reverse();
    dispatch({ type: USUARIOS_CARGADOS, payload: response.data });
  }
  catch (err) {
    dispatch({ type: ERROR_USUARIOS, payload: err })
  }
};

export const agregarUsuario = (nuevoUsuario) => async (dispatch) => {
  dispatch({ type: INICIANDO_PROCESO_USUARIOS });
  try {
    const response = await axios.post('https://g2-ch2.herokuapp.com/api/usuarios/red', nuevoUsuario);
    dispatch({ type: USUARIO_CREADO, payload: response.data });
    dispatch({ type: LIMPIAR_FORMULARIO });
    window.Materialize.toast('Usuario agregado.', TIEMPO_TOAST);
  }
  catch (err) {
    dispatch({ type: ERROR_USUARIOS, payload: err});
  }
};

export const obtenerUsuario = (id) => async (dispatch) => {
  dispatch({ type: INICIANDO_PROCESO_USUARIOS });
  try {
    const response = await axios.get(`https://g2-ch2.herokuapp.com/api/usuarios/red/${id}`);
    dispatch({ type: USUARIO_CARGADO, payload: response.data[0] })
  }
  catch (err) {
    dispatch({ type: ERROR_USUARIOS, payload: err});
  }
};

export const modificarUsuario = (id, usuarioActualizado) => async (dispatch) => {
  dispatch({ type: INICIANDO_PROCESO_USUARIOS });
  try {
    const response = await axios.post(`https://g2-ch2.herokuapp.com/api/usuarios/red/${id}`, usuarioActualizado);
    dispatch({ type: USUARIO_MODIFICADO, payload: response.data });
    dispatch({ type: LIMPIAR_FORMULARIO });
    dispatch({ type: REDIRECCIONAR, payload: true });
    window.Materialize.toast('Usuario modificado.', TIEMPO_TOAST);
  }
  catch (err) {
    dispatch({ type: ERROR_USUARIOS, payload: err});
  }
};

export const eliminarUsuario = (id) => async (dispatch) => {
  dispatch({ type: INICIANDO_PROCESO_USUARIOS });
  try {
    await axios.delete(`https://g2-ch2.herokuapp.com/api/usuarios/red/${id}`);
    dispatch({ type: USUARIO_ELIMINADO, payload: id });
  }
  catch (err) {
    dispatch({ type: ERROR_USUARIOS, payload: err })
  }
};

export const cambiarNombre = (nombre) => (dispatch) => {
  dispatch({ type: CAMBIO_NOMBRE, payload: nombre });
};

export const cambiarApellidoPaterno = (apellidoPaterno) => (dispatch) => {
  dispatch({ type: CAMBIO_APELLIDO_PATERNO, payload: apellidoPaterno });
};

export const cambiarApellidoMaterno = (apellidoMaterno) => (dispatch) => {
  dispatch({ type: CAMBIO_APELLIDO_MATERNO, payload: apellidoMaterno });
};

export const cambiarEdad = (edad) => (dispatch) => {
  dispatch({ type: CAMBIO_EDAD, payload: isNaN(edad) ? '' : edad });
};

export const activarRedireccionAInicio = (redireccionar) => (dispatch) => {
  if (redireccionar) {
    dispatch({ type: LIMPIAR_FORMULARIO });
  }
  dispatch({ type: REDIRECCIONAR, payload: redireccionar });
};

export const limpiarFormulario = () => (dispatch) => dispatch({ type: LIMPIAR_FORMULARIO });

export const limpiarError = () => (dispatch) => dispatch({type: LIMPIAR_ERROR_USUARIOS});
