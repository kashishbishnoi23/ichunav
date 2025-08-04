import React from 'react'
import { Link } from 'react-router-dom'

const Complete = () => {
  return (
    <>
     <div className='h-full w-full flex flex-col justify-center items-center'>
        <img className='h-60' src="/public/complete.jpg"></img>
        
        <div className='flex flex-col w-[60%] gap-5 items-center'>
        <div className='text-2xl font-semibold'>Complete?</div>
        <div className='text-center text-gray-500'>Once you submit your vote, you cannot edit again.</div>
        <div className='text-center text-gray-500'>Are you sure you want to submit? </div>
         
        <Link to="/loksabhavoting/thankyou">
        <button className='bg-amber-400 cursor-pointer  font-semibold  mt-2 text-white text-center py-2 px-8 rounded-full'>Yes</button>
        </Link>

        <Link to="/loksabhavoting/choosecandidate">
        <button className='bg-amber-100 cursor-pointer text-amber-400  font-semibold  mt-2  text-center py-2 px-8 rounded-full'>Go back</button>
        </Link>

        </div>


     </div>
    </>
  )
}

export default Complete