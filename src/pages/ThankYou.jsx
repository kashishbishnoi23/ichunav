import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <>
      <div className='h-screen w-full flex flex-col gap-5 justify-center items-center'>
        <div className='text-3xl font-semibold '>Thank you!</div>
        <img className='h-40' src="/public/thankyou.png"></img>
        

        <div className='flex flex-col w-[60%] gap-5 items-center'>
            
        <div className='text-2xl font-semibold text-center'>Vote Ballot Receipt</div>
        <div className=' text-gray-500 text-center'>Thankyou for submitting your ballot for Electronic Voting.</div>
        

        <button className='bg-amber-400 cursor-pointer   font-semibold  mt-2 text-white text-center py-2 px-8 rounded-full'>Download Receipt</button>

        <Link to="/home">
        <button className='bg-amber-100 cursor-pointer text-amber-400  font-semibold  mt-2  text-center py-2 px-8 rounded-full'>Back to Home</button>
        </Link>

        </div>


     </div>
    </>
  )
}

export default ThankYou