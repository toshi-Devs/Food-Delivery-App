
import { ProductType } from '@/types/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Props = {
  params:{category:string}
}

const getData = async (category:string) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed!")
  }

  return res.json();
}

const CategoryPage = async ({params}:Props) => {

  const products:ProductType[ ] = await getData(params.category)
  return (
    <div className='flex flex-wrap text-red-500'>

      {products.map((item)=> (
        <Link className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 md:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-100'
              href={`/product/${item.id}`}
              key={item.id}>

              {item.img && (
                <div className='relative h-[80%]'>
                  <Image src={item.img} alt='img' fill className='object-contain'/>
                </div>
              )}

              <div className='flex items-center justify-between font-bold '>
                <h1 className='text-xl uppercase p-2'>{item.title}</h1>
                <h2 className='group-hover:hidden text-xl'>€{item.price}</h2>
                <button className='hidden group-hover:block uppercase text-white bg-red-500 p-2 rounded-md'>Add to Cart</button>
              </div>
        </Link>
      ))}
      
    </div>
  )
}

export default CategoryPage