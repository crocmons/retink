import React from 'react'
import Logo from '../assets/logo.png'
const Header = () => {
  return (
    <header className='flex p-2 m-4'>
        <img src={Logo} alt='logo' className='w-30 h-30 object-contain text-xl cursor-pointer m-2'/>
    </header>
  )
}

export default Header