import React from 'react'

const VerifyNumber = () => {
  return (
    <>
      
      <div className='w-full h-full flex justify-center py-12'>
      <div className='flex flex-col items-center gap-3'>
        <img className='h-50' src="/public/numberverify.jpg" />
        <div className='flex flex-col gap-5 items-center w-[65%]'>
        <div className='text-2xl'>Verify your number</div>
        <div className='text-xl text-gray-500 text-center'>Protect your identity and secure details for sending election update and upcoming news</div>
        </div>

        <form className='flex flex-col gap-5'>
          <input className='border border-gray-500 px-10 py-2 rounded-lg outline-none ' type="text" placeholder='Enter mobile number'></input>
          <button className='bg-amber-400 py-2 text-white font-semibold rounded-full'>Verify now</button>
        </form>

        <div className='m-5 text-center w-[50%] text-lg text-gray-400'>OTP will be send to your registered number with Aadhar card</div>
      </div>
      </div>
    </>
  )
}

export default VerifyNumber