import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({back, next}) => {
  return (
    <>
         <div className='flex justify-between w-full px-20'>
                   
                    <Link to={back}>
                    <button className='text-gray-400 cursor-pointer font-semibold shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-8 py-2 rounded-full'>Back</button>
                    </Link>

                    <Link to={next}>
                    <button className='text-white cursor-pointer bg-amber-500 px-8 py-2 rounded-full font-semibold'>Next</button>
                    </Link>
        </div>

    </>
  )
}

export default Buttons