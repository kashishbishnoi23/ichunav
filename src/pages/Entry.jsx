import React from 'react'
import { useNavigate } from 'react-router-dom' // this hook is used to dynamically navigate to other routes 
const Entry = () => {

  const navigate = useNavigate();


  setTimeout(()=>{
    navigate("/carousel");
  }, 2000)



  return (
    <div  className="flex flex-col justify-center h-screen w-full animate-[fadeout_2s_ease-in_forwards]">
      {/* use animation here -> transition kisi trigger pe kaam krta hai -> yani agar koi property change ho to kis tarah se ho -> animation works automatically -> doens't need a trigger so we use animation here -> fadeout_2s_forwards -> syntax of animation -> name_duration_state -> forwards -> means after the animation ends, it should retain the final state (opacity-0) */}
       
       <div className='flex flex-col items-center'>
        <img className='h-60' src="/public/votingbox.png"/>
        <div className='flex flex-col gap-2 items-center plus-jakarta '>
        <div className='font-semibold'>Online</div>
        <div className='text-4xl font-bold'>VOTING</div>
        <div className=' text-gray-500'>Govt. of India</div>
        </div>
     
       </div>
    </div>
  )
}

export default Entry