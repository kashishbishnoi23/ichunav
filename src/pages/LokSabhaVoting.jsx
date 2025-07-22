import React from 'react'
import Navbar from '../components/Navbar'
import Workflow from '../components/Workflow'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Buttons from '../components/Buttons'
const LokSabhaVoting = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* <Navbar/> */}



            <div className='w-full flex flex-col gap-4  items-center py-10'>

                <div className='flex flex-col'>
                    <h3 className='text-3xl text-gray-900 font-bold  text-center'>Lok Sabha Elections 2025</h3>
                    <div className='text-lg text-center italic text-gray-500'>Exercise your democratic right. Your vote matters</div>
                </div>

                {/* <div className='text-3xl  font-semibold'>How to vote? </div> */}

                <div className='w-full max-w-5xl max-lg:max-w-xl max-sm:max-w-sm h-auto flex flex-col gap-2 p-4 '>
                    {/* Top row */}
                    <div className='flex flex-col lg:flex-row gap-2 h-auto lg:h-1/2'>
                        {/* Top left - square */}
                        <div className='w-full lg:w-1/4  rounded-2xl p-4 lg:p-6 flex flex-col justify-center items-center text-gray-700 shadow-lg'>
                            <div className='text-3xl lg:text-4xl mb-4'><svg xmlns="http://www.w3.org/2000/svg" fill="#FE9A00" viewBox="0 0 24 24" width="44" height="44">
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
</svg>
</div>
                            <h3 className='text-xl lg:text-xl font-bold text-center'>Choose your constituency</h3>
                            <p className='text-center text-gray-500 mt-2 text-sm lg:text-base'> Choose or confirm the constituency you belong to.</p>
                        </div>

                        {/* Top right - rectangle */}
                        <div className='w-full lg:w-3/4  rounded-2xl p-4 lg:p-6 flex flex-col justify-center  shadow-lg '>
                            <div className='text-2xl lg:text-3xl mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FE9A00" viewBox="0 0 24 24" width="54" height="54">
  <path d="M12 12c2.67 0 8 1.34 8 4v2c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-2c0-2.66 5.33-4 8-4zm0-2c1.66 0 3-1.34 3-3S13.66 4 12 4 9 5.34 9 7s1.34 3 3 3z"/>
</svg>

                            </div>
                            <h3 className='text-lg lg:text-xl font-bold '>View Candidates
</h3>
                            <p className='text-gray-500 mt-2 text-sm lg:text-base'> Explore your options before casting your vote.</p>
                            <div className='mt-4 text-amber-400'>
                                <div className=''>See a list of all contesting candidates in your constituency.</div>
                                <div className=' '>View their party symbol, manifesto, previous work, and promises.

</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom row */}
                    <div className='flex flex-col lg:flex-row gap-2 h-auto lg:h-1/2'>
                        {/* Bottom left - rectangle */}
                        <div className='w-full lg:w-3/4 rounded-2xl p-4 lg:p-6 flex flex-col justify-center shadow-lg'>
                            <div className='text-2xl lg:text-3xl mb-3'><svg xmlns="http://www.w3.org/2000/svg" fill="#FE9A00" viewBox="0 0 24 24" width="44" height="44">
  <path d="M20 6h-5V4H9v2H4c-1.1 0-2 .9-2 2v2h20V8c0-1.1-.9-2-2-2zm0 4H4v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10zm-6.5-9h-3v4h3V1z"/>
</svg>
</div>
                            <h3 className='text-lg lg:text-xl font-bold'>Cast Your Vote</h3>
                            <p className=' mt-2 text-gray-500 text-sm lg:text-base'>Choose your preferred candidate.</p>
                            <div className='mt-4 space-y-2'>
                                <div className=' text-md text-amber-500'>Select one candidate from the list.

</div>
                                <div className='text-md text-amber-500  '>You’ll be asked to confirm your selection before submitting.

</div>
                            </div>
                        </div>

                        {/* Bottom right - square */}
                        <div className='w-full lg:w-1/4 rounded-2xl p-4 lg:p-6 flex flex-col justify-center items-center  shadow-lg'>
                            <div className='text-3xl lg:text-4xl mb-4'><svg xmlns="http://www.w3.org/2000/svg" fill="#FE9A00" viewBox="0 0 24 24" width="34" height="34">
  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.2 17.2-5-5L7.2 10.8l3.6 3.6 6-6L18 9.6l-7.2 7.6z"/>
</svg>
</div>
                            <h3 className='text-xl lg:text-xl font-bold text-center'>Get Confirmation
</h3>
                            <p className='text-center text-gray-500 mt-2 text-sm lg:text-base'>Your vote has been recorded securely.</p>
                            <button className='mt-4 px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base  transition-colors text-amber-500'>
                                You may receive a vote receipt/confirmation ID.
                            </button>
                        </div>
                    </div>
                </div>

                <Buttons back="/home" next="selectlocation"/>

               
            </div>


        </>
    )
}

export default LokSabhaVoting