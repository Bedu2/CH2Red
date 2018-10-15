import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';
import * as Rutas from '../Paths'

const Header = () => (
  <div>
    <Navbar className= 'red lighten-1'>
      <li><Link to='/'><Icon>account_circle</Icon></Link></li>
      <li><Link to={Rutas.RUTA_AGREGAR_USUARIO}><Icon>person_add</Icon></Link></li>
    </Navbar>
  </div>
);
export default Header;
