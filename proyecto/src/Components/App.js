import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Usuarios from './Usuarios';
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
      			</div>
      		</div>

        </BrowserRouter>
      </div>
    );

export default App;
