import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
interface typeProp{
  isloading:boolean
  className?:string,
  children:React.ReactNode
}
const SubmitButton = ({isloading,className,children}:typeProp) => {
  return (
   <Button type="submit" disabled={isloading} className={className ?? "shad-primary-btn w-full"}>
    {
      isloading ?(
        <div className='flex items-center gap-4'>
            <Image
            src="/assets/icons/Loader.svg"
            alt='loader'
            height={24}
            width={24}
            className='animate-spin'
            />
            Loading ...
        </div>
      ):children
    }

   </Button>
  )
}

export default SubmitButton