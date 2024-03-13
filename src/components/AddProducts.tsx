"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const AddProducts = () => {

    const {data:session, status} = useSession() 

    const router = useRouter()

    const handleClick = () => {
        router.push("/add")
    }
  
  return (
    <>
    { session?.user.isAdmin ? (
          <div className="flex" >
            <button className=" flex items-center justify-center gap-2 bg-red-300 rounded-full p-2 text-white" onClick={handleClick}>
              <Image src='/add3.png' alt="add" width={35} height={35} />
              <span className="font-bold">Add Products</span>
            </button>
            
          </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default AddProducts