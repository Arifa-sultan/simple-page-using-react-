import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <header className='header'>
    <a href='/' className='logo'>Logo</a>
    <nav className='navbar'>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Portfolio</a>
        <a href='/'>Seervices</a>
        <a href='/'>Contact</a>
    </nav>
   </header>
  )
}

export default Navbar
