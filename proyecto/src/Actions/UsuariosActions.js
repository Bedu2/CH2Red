import axios from 'axios';
import {
  INICIANDO, USUARIOS_CARGADOS, ERROR } from "../Types/UsuariosTypes";

export const cargarUsuarios = () => async (dispatch) => {
  dispatch({ type: INICIANDO });
  try {
    const response = await axios.get('https://g2-ch2.herokuapp.com/api/usuarios/red');
    response.data.reverse();
    dispatch({ type: USUARIOS_CARGADOS, payload: response.data });
  }
  catch (err) {
    dispatch({ type: ERROR, payload: err })
  }
};