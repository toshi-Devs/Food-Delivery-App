'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const Menu = () => {

    const [open, setOpen] = useState(false);

    const links = [
        { id: 1, name: 'HomePage', url: '/' },
        { id: 2, name: 'Menu', url: '/menu' },
        { id: 3, name: 'Working Hours', url: '/' },
        { id: 4, name: 'Contact', url: '/contact' },
    ]

    // const user TEMPORARY
    const user = false;

  return (
    <div>
        {!open ?
         <div onClick={() => setOpen(true)} ><Image src='/open.png' width={20} height={20} alt='openMenu' /></div> : 
        open && <div onClick={() => setOpen(false)} ><Image src='/close.png' width={20} height={20} alt='closeMenu' /></div> }
   
    {open && (
    <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl gap-8 z-10'>
        {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}> 
                {item.name}
            </Link>
        ))}

        {!user ? ( 
        <Link href='/login' onClick={() => setOpen(false)} > Login </Link> ) : ( 
        <Link href='/orders' onClick={() => setOpen(false)} > Orders </Link> 
        )}

        <Link href='/cart' onClick={() => setOpen(false)} > 
            <CartIcon />
        </Link> 
    </div>
    )}

    </div>
  )
}

export default Menu;