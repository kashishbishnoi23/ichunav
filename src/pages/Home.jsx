import React from 'react'
import Navbar from '../components/Navbar'
import Workflow from '../components/Workflow'
import { Vote, Building2 } from 'lucide-react'
const Home = () => {
  return (
    <>
      <div className='w-full h-full '>
        <Navbar />
        <div className='w-full h-full'>

          <div className="w-full bg-[url('/home1.jpg')] h-full bg-cover bg-center opacity-30 ">
            {/* <div className='w-[50%]'></div> */}
            {/* <img className=' w-full' src="/public/home1.jpg"></img> */}
          </div>

          {/* workflow of site: */}
          <Workflow />

          {/* choose the election type: */}

          <div className='flex flex-col gap-8 my-5'>
            <div className='flex flex-col gap-5'>
              <div className='text-3xl font-semibold  text-center text-amber-500 '>What are you voting for today?</div>
              <div className='text-2xl text-gray-500 text-center'>Pick the election type:</div>
            </div>

            <div className='flex w-full justify-center gap-10 mb-24 flex-wrap'>
              <div className='w-fit relative hover:scale-104 transition-all duration-200 flex px-4 flex-col gap-3 pb-10 pt-4 h-fit bg-white text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg overflow-hidden border border-black/20'>
                <img src="/parliament.avif" alt="parliament-img" className='w-64 h-44 rounded-md opacity-80' />
                <img src="/parliament.avif" alt="parliament-img" className='scale-200 absolute blur-sm opacity-5' />
                <div className='flex justify-between items-center'>
                  <div className=''>
                    <div className='text-start text-amber-600/70 font-semibold text-lg'>Lok Sabha</div>
                    <div className='text-start text-amber-600/70 font-semibold text-sm'>Choose your MP</div>
                  </div>
                  <div className='bg-amber-600/50 p-2 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-vote-icon lucide-vote"><path d="m9 12 2 2 4-4" /><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" /><path d="M22 19H2" /></svg></div>
                </div>
              </div>

              <div className='w-fit hover:scale-104 transition-all duration-200 relative flex px-4 flex-col gap-3 pb-10 pt-4 h-fit bg-white text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg overflow-hidden border border-black/20'>
                <img src="/vidhansabha.jpg" alt="vidhansabha-img" className='w-64 h-44 rounded-md opacity-90' />
                <img src="/vidhansabha.jpg" alt="vidhansabha-img" className='scale-200 absolute blur-sm opacity-5' />
                <div className='flex justify-between items-center'>
                  <div className=''>
                    <div className='text-start text-amber-600/70 font-semibold text-lg'>Vidhan Sabha</div>
                    <div className='text-start text-amber-600/70 font-semibold text-sm'>Choose your MLA</div>
                  </div>
                  <div className='bg-amber-600/50 p-2 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2-icon lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
                </div>
              </div>
            </div>
          </div>

          {/* why choose ichunav? */}

          <div className='flex flex-col  items-center gap-8'>

            <div className='text-3xl text-center text-amber-500 font-semibold '>Why ichunav?</div>
            
            <div className='w-fit flex flex-col gap-6'>
            <div className='flex gap-3 w-full  justify-start items-center shadow-lg p-5 rounded-lg'>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FE9A00"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/></svg></div>
            <div>
            <div className='flex flex-col'>
            <div className='self-start text-lg'>Safe & Secure</div>
            <div className='text-md text-gray-400 self-start font-semibold'>Your vote is encrypted and secured using the latest technology. Privacy is priority.</div>
            </div>
            </div>
            </div>

            <div className='flex gap-3 w-full  justify-start items-center shadow-lg p-5 rounded-lg'>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FE9A00"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg></div>
            <div>
            <div className='flex flex-col'>
            <div className='self-start text-lg'>Fast & Hassle-Free</div>
            <div className='text-md text-gray-400 self-start font-semibold'>No more long queues or complicated forms. Vote easily in just a few easy taps.</div>
            </div>
            </div>
            </div>

              <div className='flex gap-3 w-full  justify-start items-center shadow-lg p-5 rounded-lg'>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FE9A00"><path d="M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm40 214q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg></div>
            <div>
            <div className='flex flex-col'>
            <div className='self-start text-lg'>Anytime, Anywhere</div>
            <div className='text-md text-gray-400 self-start font-semibold'>Whether you’re at home or traveling — cast your vote from wherever you are.</div>
            </div>
            </div>
            </div>

            
              <div className='flex gap-3 w-full  justify-start items-center shadow-lg p-5 rounded-lg'>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FE9A00"><path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg></div>
            <div>
            <div className='flex flex-col'>
            <div className='self-start text-lg'>Real-Time Updates</div>
            <div className='text-md text-gray-400 self-start font-semibold'>Track your vote, see participation stats, and stay informed about the election process.</div>
            </div>
            </div>
            </div>

                <div className='flex gap-3 w-full  justify-start items-center shadow-lg p-5 rounded-lg'>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FE9A00"><path d="M480-560h200v-80H480v80Zm0 240h200v-80H480v80ZM360-520q33 0 56.5-23.5T440-600q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600q0 33 23.5 56.5T360-520Zm0 240q33 0 56.5-23.5T440-360q0-33-23.5-56.5T360-440q-33 0-56.5 23.5T280-360q0 33 23.5 56.5T360-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg></div>
            <div>
            <div className='flex flex-col'>
            <div className='self-start text-lg'>Focused Elections</div>
            <div className='text-md text-gray-400 self-start font-semibold'>Track your vote, see participation stats, and stay informed about the election process.</div>
            </div>
            </div>
            </div>


          

            </div>



          </div>


        </div>
      </div>
    </>
  )
}

export default Home