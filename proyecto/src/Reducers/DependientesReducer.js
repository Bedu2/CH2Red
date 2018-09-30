import {
  	NOMBRE_DEPENDIENTE,
	DEPENDENCIA,
	EDAD_DEPENDIENTE,
	LIMPIAR_FORMULARIO_DEPEPENDIENTES,
	INICIANDO_PROCESO_DEPENDIENTES,
	ERROR_DEPENDIENTES,
	DEPENDIENTES_CARGADOS,
	DEPENDIENTE_CREADO,
	DEPENDIENTE_CARGADO,
	DEPENDIENTE_MODIFICADO,
	DEPENDIENTE_ELIMINADO,
} from '../Types/DependientesTypes';

const INITIAL_STATE = {
	dependientes: [],
	cargando: false,
	error: '',
	nombre_completo:'',
	dependencia:'',
	edad: '',
	_usuario: ''
};

export default (state= INITIAL_STATE, action) => {
	switch (action.type){
		case NOMBRE_DEPENDIENTE: return { ...state, nombre_completo: action.payload };
		case DEPENDENCIA: return { ...state, dependencia: action.payload };
		case EDAD_DEPENDIENTE: return { ...state, edad: action.payload };
		case LIMPIAR_FORMULARIO_DEPEPENDIENTES: return {
			...state,
			nombre_completo:'',
			dependencia:'',
			edad: '',
			_usuario:''
			};
		case ERROR_DEPENDIENTES:
			console.log(action.payload);
			return { ...state, error: action.payload, cargando: false};
		case INICIANDO_PROCESO_DEPENDIENTES: return { ...state, cargando: true };
		case DEPENDIENTES_CARGADOS: return {
			...state,
			cargando: false,
			dependientes: action.payload,
			consultaUsuarios: true};
		case DEPENDIENTE_CREADO: return {
			...state,
			cargando: false,
			dependiente: [action.payload, ...state.dependiente ]};
		case DEPENDIENTE_CARGADO: return {
			...state,
			cargando: false,
			nombre_completo: action.payload.nombre_completo,
			edad: action.payload.edad
		};
		case DEPENDIENTE_MODIFICADO: return { ...state, cargando: false };
		case DEPENDIENTE_ELIMINADO: return { ...state, consultaUsuarios: false };

		default: return state;
	}
}