import { CAMBIO_NOMBRE, 
	CAMBIO_APELLIDO_PATERNO, 
	CAMBIO_APELLIDO_MATERNO, 
	CAMBIO_EDAD, 
	ERROR_USUARIOS, 
	EMPEZAR_USUARIOS, 
	CARGANDO_USURIOS, 
	CONSULTA_USUARIOS,
	USUARIO_SOLO_LECTURA, 
	USUARIO_DATOS_COMPLETOS,
	LIMPIAR_FORMULARIO
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
	consultaUsuarios: false,
	soloLectura: false,
	datosCompletos: false
}

export default (state= INITIAL_STATE, action) => {
	switch (action.type){
		case CAMBIO_NOMBRE: return { ...state, nombre: action.payload };
		case CAMBIO_APELLIDO_PATERNO: return { ...state, apellidoPaterno: action.payload};
		case CAMBIO_APELLIDO_MATERNO: return { ...state, apellidoMaterno: action.payload};
		case CAMBIO_EDAD: return { ...state, edad: parseInt(action.payload, 10) };
		case ERROR_USUARIOS: return { ...state, error: action.payload};
		case EMPEZAR_USUARIOS: return { ...state, cargando: true};
		case CARGANDO_USURIOS: return { ...state, cargando: false, usuarios: action.payload};
		case CONSULTA_USUARIOS: return { ...state, consultaUsuarios: true };
		case USUARIO_SOLO_LECTURA: return { ...state, soloLectura: action.payload };
		case LIMPIAR_FORMULARIO: return { 
			...state, 
			nombre:'',
			apellidoPaterno: '',
			apellidoMaterno: '',
			edad: NaN,
			};
		default: return state;
	}
}