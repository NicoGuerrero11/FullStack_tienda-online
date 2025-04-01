import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/register">Registrarse</Link>
        </li>
        <li>
          <Link to='/login'>Iniciar Sesion</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar