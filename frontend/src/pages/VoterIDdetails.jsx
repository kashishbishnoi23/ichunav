import React from 'react'

const VoterIDdetails = () => {
  return (
    <>

    <div className='h-full w-full'>
      

        <div className='p-8 h-full w-full flex flex-col items-center gap-5'>
            <div className='w-[80%]'>
              <div className='py-4 self-start text-center '>Voter ID details </div>
            <div className='text-lg text-gray-500 text-center' >Your details has been verified as per the government database.</div>
            </div>

            <form className='flex flex-col w-[50%] gap-3 items-start'>
                <div className='flex flex-col gap-2 w-full'>
                <div className='text-gray-500 text-sm'>Voter ID number</div>
                <input className='border w-full outline-none border-gray-400 p-2 text-gray-700 bg-gray-100 text-xs rounded-lg ' type="text" value="123456789111" readOnly></input>
                </div>


                <div className='flex flex-col gap-2 w-full'>
                    <div className='text-gray-500 text-sm'>Your name</div>
                     <input className='border w-full outline-none border-gray-400 p-2 text-gray-700 bg-gray-100 text-xs rounded-lg ' type="text" value="Amit Sharma" readOnly></input>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                     <div className='text-gray-500 text-sm'>Gender</div>
                     <input className='border w-full outline-none border-gray-400 p-2 text-gray-700 bg-gray-100 text-xs rounded-lg '  type="text" value="Male" readOnly></input>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                   <div className='text-gray-500 text-sm'>Date of Birth</div>
                <input className='border w-full outline-none border-gray-400 p-2 text-gray-700 bg-gray-100 text-xs rounded-lg ' type="text" value="24 / 07 / 1990" readOnly></input>

                </div>

                <div className='flex flex-col gap-2 w-full'>
                 <div className='text-gray-500 text-sm'>Address</div>
                <textarea className='border w-full outline-none border-gray-400 p-2 text-gray-700 bg-gray-100 text-xs rounded-lg' type="text" value="A-32, Railway Colony,Gali no. 2, Delhi,India, 400276" readOnly></textarea>

                </div>

                <button className='bg-amber-400 font-semibold self-center mt-2 text-white text-center py-2 px-8 rounded-full'>Continue</button>
                
                

                

            </form>
        </div>
        
    </div>
    
    </>
  )
}

export default VoterIDdetails