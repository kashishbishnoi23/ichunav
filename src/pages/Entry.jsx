import React from 'react'
// import votingbox from "../assets/votingbox.png"
const Entry = () => {
  return (
    <div className='flex flex-col justify-center border border-black h-full w-full'>
       
       <div className='flex flex-col items-center'>
        <img className='h-50' src="/public/votingbox.png"/>
        <div className='flex flex-col gap-2 items-center plus-jakarta '>
        <div className='font-semibold'>Online</div>
        <div className='text-4xl font-bold'>VOTING</div>
        <div className='text-sm text-gray-500'>Govt. of India</div>
        </div>
     
       </div>
    </div>
  )
}

export default Entry