import React from 'react'

const VerifyVoterID = () => {

    
  return (
    <>
    <div className='w-full h-full flex justify-center py-20'>
      <div className='flex flex-col items-center gap-3'>
        <img className='h-45 shadow-lg' src="/public/voterid.jpg" />
        <div className='flex flex-col gap-5 items-center w-[65%]'>
        <div className='text-2xl'>Verify Voter ID</div>
        <div className='text-xl text-gray-500 text-center'>Enter unique 12 digit number written on your voter id card for verification purpose</div>
        </div>

        <form className='flex flex-col gap-5'>
          <input id="voteridinput" className='border border-gray-500 px-10 py-2 rounded-lg outline-none' type="text" placeholder='Enter Voter ID number'></input>
          <button className='bg-amber-400 py-2 text-white font-semibold rounded-full'>Submit</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default VerifyVoterID