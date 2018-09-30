import {
  CAMBIO_NOMBRE,
  CAMBIO_APELLIDO_PATERNO,
  CAMBIO_APELLIDO_MATERNO,
  CAMBIO_EDAD,
  ERROR_USUARIOS,
  INICIANDO_PROCESO_USUARIOS,
  USUARIOS_CARGADOS,
//	CONSULTA_USUARIOS,
  FORMULARIO_SOLO_LECTURA,
  LIMPIAR_FORMULARIO, USUARIO_CREADO, USUARIO_ELIMINADO, USUARIO_CARGADO, USUARIO_MODIFICADO
} from '../Types/UsuariosTypes';

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: '',
	nombre:'',
	apellidoPaterno: '',
	apellidoMaterno: '',
	edad: '',
	idUsuario: '',
	soloLectura: false,
	datosCompletos: false
};

export default (state= INITIAL_STATE, action) => {
	switch (action.type){
		case CAMBIO_NOMBRE: return { ...state, nombre: action.payload };
		case CAMBIO_APELLIDO_PATERNO: return { ...state, apellidoPaterno: action.payload};
		case CAMBIO_APELLIDO_MATERNO: return { ...state, apellidoMaterno: action.payload};
		case CAMBIO_EDAD: return { ...state, edad: action.payload };
		case FORMULARIO_SOLO_LECTURA: return { ...state, soloLectura: action.payload };
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
		case INICIANDO_PROCESO_USUARIOS: return { ...state, cargando: true };
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
		case USUARIO_MODIFICADO: return { ...state, cargando: false };
		case USUARIO_ELIMINADO: return { ...state, consultaUsuarios: false };
		default: return state;
	}
}