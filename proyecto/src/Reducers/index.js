import { combineReducers } from 'redux';
import UsuariosReducer from './UsuariosReducer';
import DependientesReducer from './DependientesReducer';

export default combineReducers( {UsuariosReducer, DependientesReducer });