import {
  CAMBIO_NOMBRE, CAMBIO_APELLIDO_PATERNO, CAMBIO_APELLIDO_MATERNO, CAMBIO_EDAD,
  ERROR_USUARIOS, INICIANDO_PROCESO_USUARIOS, USUARIOS_CARGADOS, LIMPIAR_FORMULARIO,
  USUARIO_CREADO, USUARIO_ELIMINADO, USUARIO_CARGADO, USUARIO_MODIFICADO, REDIRECCIONAR
} from '../Types/usuariosTypes';

const INITIAL_STATE = {
  usuarios: [],
  cargando: false,
  error: '',
  nombre:'',
  apellidoPaterno: '',
  apellidoMaterno: '',
  edad: '',
  idUsuario: '',
  datosCompletos: false,
  redireccionar: false
};

export default (state = INITIAL_STATE, action) => {
  const obtenerIndiceUsuario = (idUsuario) => state.usuarios.findIndex((usuario) => {
    return usuario._id === idUsuario
  });

  switch (action.type){
    case CAMBIO_NOMBRE: return { ...state, nombre: action.payload };
    case CAMBIO_APELLIDO_PATERNO: return { ...state, apellidoPaterno: action.payload};
    case CAMBIO_APELLIDO_MATERNO: return { ...state, apellidoMaterno: action.payload};
    case CAMBIO_EDAD: return { ...state, edad: action.payload };
    case LIMPIAR_FORMULARIO: return {
      ...state,
      nombre:'',
      apellidoPaterno: '',
      apellidoMaterno: '',
      edad: '',
      };
    case ERROR_USUARIOS:
      console.log(action.payload);
      return { ...state, error: action.payload, cargando: false};
    case INICIANDO_PROCESO_USUARIOS: return {
      ...state,
      cargando: true };
    case USUARIOS_CARGADOS: return {
      ...state,
      cargando: false,
      usuarios: action.payload,
      consultaUsuarios: true};
    case USUARIO_CREADO: return {
      ...state,
      cargando: false,
      usuarios: [action.payload, ...state.usuarios]};
    case USUARIO_CARGADO: return {
      ...state,
      cargando: false,
      nombre: action.payload.nombre,
      apellidoPaterno: action.payload.apellidos.paterno,
      apellidoMaterno: action.payload.apellidos.materno,
      edad: action.payload.edad
    };
    case USUARIO_MODIFICADO:
      const idModificado = obtenerIndiceUsuario(action.payload._id);
      console.log(idModificado);
      if (idModificado >= 0) {
        state.usuarios.splice(idModificado, 1, action.payload);
      }
      return { ...state, cargando: false };
    case USUARIO_ELIMINADO:
      const idEliminado = obtenerIndiceUsuario(action.payload);
      if (idEliminado >= 0) {
        state.usuarios.splice(idEliminado, 1);
      }
      return { ...state, cargando: false };
    case REDIRECCIONAR:
      return {...state, redireccionar: action.payload };
    default: return state;
  }
}
