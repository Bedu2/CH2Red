import {

}
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
}

export default (state= INITIAL_STATE, action) => {
	switch (action.type){
		case 'cambiarUsuarioNombre': return { ...state, nombre: action.payload };
		case 'cambiarUsuarioApellidoPaterno': return { ...state, apellidoPaterno: action.payload};
		case 'cambiarUsuarioApellidoMaterno': return { ...state, apellidoMaterno: action.payload};
		case 'cambiarUsuarioEdad': return { ...state, edad: action.payload};
		case 'error': return { ...state, error: action.payload};
		case 'iniciando': return { ...state, cargando: true};
		case 'usuariosCargados': return { ...state, cargando: false, usuarios: action.payload};
		case 'consultaUsuarios': return { ...state, consultaUsuarios: true };
	}
}