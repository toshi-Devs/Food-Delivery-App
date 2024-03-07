import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>

      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full'>

        <div className='relative h-1/3 w-full'>
          <Image src={"/loginBg.png"} alt="" fill className=' object-cover'/> 
        </div>

        <div className=' p-10 flex flex-col gap-8'> 
           <h1 className='font-bold text-xl'>Welcome</h1>
           <p>Log into your account or create a new one using socials </p>

           <button className='flex gap-4 p-4 ring-1 ring-orange-200 rounded-md'>
              <Image src={"/google.png"} alt="" width={20} height={20} className='object-contain'/>
              <span>Sign in with Google</span>
           </button>
           <button className='flex gap-4 p-4 ring-1 ring-blue-200 rounded-md'>
              <Image src={"/facebook.png"} alt="" width={20} height={20} className='object-contain'/>
              <span>Sign in with Facebook</span>
           </button>

            <p className='text-sm '>
              Have problem? <Link href={'/'} className='underline'> Contact Us </Link>
            </p>
        </div>

      </div>
      

    </div>
  )
}

export default LoginPage