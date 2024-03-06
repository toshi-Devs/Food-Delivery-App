import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {

    const user = false;

  return (

    <div className='text-red-500 h-12 p-4 flex justify-between items-center border-b-2 border-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>

        <div className='hidden md:flex gap-4 flex-1'>
            <Link href='/' >HomePage</Link>
            <Link href='/menu' >Menu</Link>
            <Link href='/contact' >Contact</Link>
        </div>
        {/* Logo */}
        <div className='text-xl md:font-bold flex-1 md:text-center'>
            <Link href='/' >PIZZINO</Link>
        </div>
        {/* Mobile Menu */}
        <div className='md:hidden'>
            <Menu />
        </div>

        <div className='hidden md:flex gap-4 items-center justify-end flex-1'>

            <div className='md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md '>
                <Image src='/phone.png' width={20} height={20} alt='phone' />
                <span>+358-446-8794</span>
            </div>

            {!user ? (
            <Link href='/login' >Login</Link> ) : (
            <Link href='/orders' >Orders</Link>
            )}

            <CartIcon />
        </div>

    </div>
  )
}

export default Navbar