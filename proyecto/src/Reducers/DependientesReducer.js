import {
  USUARIO_DEPENDIENTE,
  NOMBRE_DEPENDIENTE,
  DEPENDENCIA,
  EDAD_DEPENDIENTE,
  LIMPIAR_FORMULARIO_DEPENDIENTES,
  INICIANDO_PROCESO_DEPENDIENTES,
  ERROR_DEPENDIENTES,
  DEPENDIENTES_CARGADOS,
  DEPENDIENTE_CREADO,
  DEPENDIENTE_CARGADO,
  DEPENDIENTE_MODIFICADO,
  DEPENDIENTE_ELIMINADO,
  REDIRECCIONAR_DEPENDIENTES,
  NOMBRE_COMPLETO_USUARIO
} from '../Types/DependientesTypes';

const INITIAL_STATE = {
	dependientes: [],
	cargando: false,
	error: '',
	nombre_completo:'',
	dependencia:'',
	edad: '',
	_usuario: '',
	nombre_usuario: '',
	redireccionar: false
};

export default (state= INITIAL_STATE, action) => {
	const obtenerIndiceDependiente = (idDependiente) => state.dependientes.findIndex(
		dependiente => dependiente._id === idDependiente
	);

	switch (action.type){
		case USUARIO_DEPENDIENTE: return { ...state, _usuario: action.payload };
		case NOMBRE_COMPLETO_USUARIO: return { ...state, cargando: false, nombre_usuario: action.payload };
		case NOMBRE_DEPENDIENTE: return { ...state, nombre_completo: action.payload };
		case DEPENDENCIA: return { ...state, dependencia: action.payload };
		case EDAD_DEPENDIENTE: return { ...state, edad: action.payload };
		case LIMPIAR_FORMULARIO_DEPENDIENTES: return {
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
			dependientes: action.payload };
		case DEPENDIENTE_CREADO: return {
			...state,
			cargando: false,
			dependientes: [action.payload, ...state.dependientes] };
		case DEPENDIENTE_CARGADO: return {
			...state,
			cargando: false,
			nombre_completo: action.payload.nombre_completo,
			dependencia: action.payload.dependencia,
			edad: action.payload.edad
		};
		case DEPENDIENTE_MODIFICADO:
			const idModificado = obtenerIndiceDependiente(action.payload._id);
			if (idModificado >= 0) {
				state.dependientes.splice(idModificado, 1, action.payload);
			}
			return { ...state, cargando: false };
		case DEPENDIENTE_ELIMINADO:
      const idEliminado = obtenerIndiceDependiente(action.payload);
      if (idEliminado >= 0) {
        state.dependientes.splice(idEliminado, 1);
      }
			return { ...state, cargando: false };
		case REDIRECCIONAR_DEPENDIENTES: return {...state, redireccionar: action.payload };
		default: return state;
	}
}