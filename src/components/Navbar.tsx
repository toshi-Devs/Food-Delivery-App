import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (

    <div className='text-red-500 h-12 p-4 flex justify-between items-center border-b-2 border-red-500 uppercase'>
        {/* Logo */}
        <div className='text-xl '>
            <Link href='/' >PIZZINO</Link>
        </div>
        {/* Mobile Menu */}
        <div>
            <Menu />
        </div>

    </div>
  )
}

export default Navbar