import {
	CAMBIAR_USUARIO_NOMBRE, CAMBIAR_USUARIO_APELLIDO_MATERNO,
	CAMBIAR_USUARIO_APELLIDO_PATERNO, CAMBIAR_USUARIO_EDAD,
	INICIANDO, ERROR, USUARIOS_CARGADOS, CONSULTA_USUARIOS
} from "../Types/UsuariosTypes";

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: '',
	nombre:'',
	apellidoPaterno: '',
	apellidoMaterno: '',
	edad: NaN,
	idUsuario: '',
	consultaUsuarios: false
};

export default (state= INITIAL_STATE, action) => {
	switch (action.type){
		case INICIANDO: return { ...state, error: '', cargando: true};
		case ERROR: return { ...state, error: action.payload, cargando: false};

		case CAMBIAR_USUARIO_NOMBRE: return { ...state, nombre: action.payload };
		case CAMBIAR_USUARIO_APELLIDO_PATERNO: return { ...state, apellidoPaterno: action.payload};
		case CAMBIAR_USUARIO_APELLIDO_MATERNO: return { ...state, apellidoMaterno: action.payload};
		case CAMBIAR_USUARIO_EDAD: return { ...state, edad: action.payload};

		case USUARIOS_CARGADOS: return { ...state, cargando: false, usuarios: action.payload};
		case CONSULTA_USUARIOS: return { ...state, consultaUsuarios: true };

		default: return state;
	}
}