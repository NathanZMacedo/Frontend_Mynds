import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  return (
    <div id='navbar'>
        <nav>
            <div className='Links'>
                <Link to='/'>Home</Link>
                <Link to='/'>Quem Somos</Link>
                <Link to='/'>Cursos</Link>
                <Link to='/'>Blog</Link>
            </div>
        </nav>
    </div>
  )
}



export default Navbar