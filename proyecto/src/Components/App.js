import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Usuarios from './Usuarios';
import UsuariosAgregar from './Usuarios/AgregarUsuarios';
import '../App.css';

const App = () => (
      <div>
      	<BrowserRouter>
      		<div>
      			<Header />
      			<br/>
      			<br/>
      			<div className='container' >
      				<Route exact path='/' component= {Usuarios} />
      				<Route exact path='/AgregarUsuario' component= {UsuariosAgregar} />
      				<Route exact path='/VerUsuarios/:id' component= {UsuariosAgregar} />
      			</div>
      		</div>

        </BrowserRouter>
      </div>
    );

export default App;
