import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Usuarios from './Usuarios';
import AgregarEditar from './Usuarios/AgregarEditarUsuarios';
import Dependientes from './Dependientes';
import AgregarEditarDependiente from './Dependientes/AgregarEditarDependientes';
import '../App.css';
import * as Rutas from '../Paths';

const App = () => (
  <div>
      	<BrowserRouter>
      		<div>
      			<Header />
      			<br/>
      			<br/>
      			<div className='container' >
      				<Route exact path='/' component= {Usuarios} />
      				<Route exact path={Rutas.RUTA_AGREGAR_USUARIO} component= {AgregarEditar} />
      				<Route exact path={`${Rutas.RUTA_EDITAR_USUARIO}:id`} component= {AgregarEditar} />
      				<Route exact path={`${Rutas.RUTA_LISTA_DEPENDIENTES}:id`} component= {Dependientes} />
      				<Route exact path={`${Rutas.RUTA_AGREGAR_DEPENDIENTE}:usuarioId`}
										 component= {AgregarEditarDependiente} />
      				<Route exact path={`${Rutas.RUTA_EDITAR_DEPENDIENTE}:dependienteId`}
										 component= {AgregarEditarDependiente} />
      			</div>
      		</div>

        </BrowserRouter>
      </div>
);

export default App;
