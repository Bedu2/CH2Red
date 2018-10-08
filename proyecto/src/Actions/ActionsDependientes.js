import axios from 'axios';
import {
  NOMBRE_DEPENDIENTE,
  ERROR_DEPENDIENTES,
  DEPENDENCIA,
  EDAD_DEPENDIENTE,
  LIMPIAR_FORMULARIO_DEPENDIENTES,
  INICIANDO_PROCESO_DEPENDIENTES,
  DEPENDIENTES_CARGADOS,
  DEPENDIENTE_CREADO,
  DEPENDIENTE_CARGADO,
  DEPENDIENTE_MODIFICADO,
  DEPENDIENTE_ELIMINADO,
  USUARIO_DEPENDIENTE,
  REDIRECCIONAR_DEPENDIENTES
} from "../Types/DependientesTypes";

const TIEMPO_TOAST = 4000;

export const asignarIdUsuario = (id) => (dispatch) => {
  dispatch({ type: USUARIO_DEPENDIENTE, payload: id});
};

export const cargarDependientes = (idUsuario) => async (dispatch) => {
  dispatch({ type: INICIANDO_PROCESO_DEPENDIENTES });
  try {
    const response = await axios.get(`https://g2-ch2.herokuapp.com/api/dependientes_usuario/red/${idUsuario}`);
    response.data.reverse();
    dispatch({ type: DEPENDIENTES_CARGADOS, payload: response.data });
  }
  catch (err) {
    dispatch({ type: ERROR_DEPENDIENTES, payload: err })
  }
};

export const agregarDependiente = (nuevoDependiente) => async (dispatch) => {
  dispatch({ type: INICIANDO_PROCESO_DEPENDIENTES });
  try {
    console.log(nuevoDependiente);
    const response = await axios.post('https://g2-ch2.herokuapp.com/api/dependientes/red', nuevoDependiente);
    dispatch({ type: DEPENDIENTE_CREADO, payload: response.data });
    dispatch({ type: LIMPIAR_FORMULARIO_DEPENDIENTES });
    window.Materialize.toast('Dependiente agregado.', TIEMPO_TOAST);
  }
  catch (err) {
    dispatch({ type: ERROR_DEPENDIENTES, payload: err});
  }
};

export const obtenerDependiente = (id) => async (dispatch) => {
  dispatch({ type: INICIANDO_PROCESO_DEPENDIENTES });
  try {
    const response = await axios.get(`https://g2-ch2.herokuapp.com/api/dependientes/red/${id}`);
    console.log(response.data);
    dispatch({ type: DEPENDIENTE_CARGADO, payload: response.data[0] })
  }
  catch (err) {
    dispatch({ type: ERROR_DEPENDIENTES, payload: err});
  }
};

export const modificarDependiente = (id, dependienteActualizado) => async (dispatch) => {
  dispatch({ type: INICIANDO_PROCESO_DEPENDIENTES });
  try {
    const response = await axios.post(`https://g2-ch2.herokuapp.com/api/dependientes/red/${id}`, dependienteActualizado);
    dispatch({ type: DEPENDIENTE_MODIFICADO, payload: response.data });
    dispatch({ type: LIMPIAR_FORMULARIO_DEPENDIENTES });
    window.Materialize.toast('Dependiente modificado.', TIEMPO_TOAST);
  }
  catch (err) {
    dispatch({ type: ERROR_DEPENDIENTES, payload: err});
  }
};

export const eliminarDependiente = (id) => async (dispatch) => {
  dispatch({ type: INICIANDO_PROCESO_DEPENDIENTES });
  try {
    await axios.delete(`https://g2-ch2.herokuapp.com/api/dependientes/red/${id}`);
    dispatch({ type: DEPENDIENTE_ELIMINADO, payload: id })
  }
  catch (err) {
    dispatch({ type: ERROR_DEPENDIENTES, payload: err })
  }
};

export const cambiarNombreCompleto = (nombre_completo) => (dispatch) => {
  dispatch({ type: NOMBRE_DEPENDIENTE , payload: nombre_completo });
};

export const cambiarDependencia = (dependencia) => async (dispatch) => {
  dispatch({ type: DEPENDENCIA, payload: dependencia });
};

export const cambiarEdad = (edad) => (dispatch) => {
  dispatch({ type: EDAD_DEPENDIENTE, payload: isNaN(edad) ? '' : edad });
};

export const enviarError = (error) => (dispatch) => {
  dispatch({ type: ERROR_DEPENDIENTES, payload: error });
};

export const activarRedireccion = (activar) => (dispatch) => {
  dispatch({ type: REDIRECCIONAR_DEPENDIENTES, payload: activar })
};