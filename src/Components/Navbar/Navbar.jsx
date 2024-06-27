import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";


function Navbar() {
  return (
    <div id='navbar'>
        <nav>
            <div className='Links'>
                <Link to='/'>Home</Link>
                <Link to='/QuemSomos'>Quem Somos</Link>
                <FaSearch color='white'/>
            </div>
        </nav>
    </div>
  )
}



export default Navbar