import React from 'react'

const Complete = () => {
  return (
    <>
     <div className='h-full w-full flex flex-col justify-center items-center'>
        <img className='h-60' src="/public/complete.jpg"></img>
        
        <div className='flex flex-col w-[60%] gap-5 items-center'>
        <div className='text-2xl font-semibold'>Complete?</div>
        <div className='text-center text-gray-500'>Once you submit your vote, you cannot edit again.</div>
        <div className='text-center text-gray-500'>Are you sure you want to submit? </div>
        
        <button className='bg-amber-400  font-semibold  mt-2 text-white text-center py-2 px-8 rounded-full'>Yes</button>
        <button className='bg-amber-100 text-amber-400  font-semibold  mt-2  text-center py-2 px-8 rounded-full'>Go back</button>

        </div>


     </div>
    </>
  )
}

export default Complete