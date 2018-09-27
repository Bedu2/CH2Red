import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Usuarios from './Usuarios';
import UsuariosAgregar from './Usuarios/AgregarUsuarios';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<BrowserRouter>
      		<div>
      			<Header />
      			<br/>
      			<br/>
      			<div className='container' >
      				<Route exact path='/' component= {Usuarios} />
      			</div>
      		</div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
