import axios from 'axios';
import {
  CARGANDO_USUARIOS,
  USUARIOS_CARGADOS,
  USUARIO_CREADO,
  USUARIO_MODIFICADO,
  USUARIO_ELIMINADO,
  ERROR_USUARIOS,
  CAMBIO_NOMBRE,
  CAMBIO_APELLIDO_PATERNO,
  CAMBIO_APELLIDO_MATERNO,
  CAMBIO_EDAD,
  FORMULARIO_SOLO_LECTURA, LIMPIAR_FORMULARIO
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

export const agregarUsuario = (nuevoUsuario) => async (dispatch) => {
  dispatch({ type: CARGANDO_USUARIOS });
  try {
    const response = await axios.post('https://g2-ch2.herokuapp.com/api/usuarios/red', nuevoUsuario);
    dispatch({ type: USUARIO_CREADO, payload: {
        usuario: response.data,
      } });
    dispatch({ type: LIMPIAR_FORMULARIO });
  }
  catch (err) {
    console.log(err);
    dispatch({ type: ERROR_USUARIOS, payload: err});
  }
};

export const modificarUsuario = () => {};

export const eliminarUsuario = (id) => async (dispatch) => {
  dispatch({ type: CARGANDO_USUARIOS });
  try {
    await axios.delete(`https://g2-ch2.herokuapp.com/api/usuarios/red/${id}`);

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
  dispatch({ type: CAMBIO_EDAD, payload: !isNaN(edad) ? edad : '' });
};

export const enviarError = (error) => (dispatch) => {
  dispatch({ type: ERROR_USUARIOS, payload: error });
};

export const habilitarFormulario = (habilitar) => (dispatch) => {
  dispatch({ type: FORMULARIO_SOLO_LECTURA, payload: !habilitar });
};
