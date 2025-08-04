import React from 'react'
import Allcandidates from "../utils/candidates.json"

import { useSelector, useDispatch } from 'react-redux'
import { setCandidate } from '../features/VoteSlice';
import { useState } from 'react';
import Buttons from '../components/Buttons';

// useSelector is used to get the state stored in store
// useDispatch -> used to dispatch actions -> ki konsa function hame call krna hai from the store/slices

const ChooseCandidates = () => {


  // candidates -> pure json object -> we can access the value of a key in 2 ways : using dot -> candidates.candidatesData  or bracket -> candidates["candidatesData"] -> bracket wale case me use double quotes for strings (necessary)
  const selectedCity = useSelector((state) => state.voteSlice.city); // state -> store,    state.sliceName.key 
  console.log(selectedCity);
  const candidatesData = Allcandidates["candidatesData"].filter((city, index) => city.name == selectedCity);
  // candidatesData is an array -> containing that one object where the city matches 
  const candidateArray = candidatesData[0].candidates;
  console.log(candidatesData);
   
  const selectedCandidate = useSelector((state) => state.voteSlice.candidate);
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id)=>{
    //  {selectedCandidate != '' ? }
     setActiveIndex(id);
     dispatch(setCandidate(id));
  }


  return (
    <>


      <div className='h-full w-full flex flex-col gap-12 py-5 items-center justify-around'>
        <div className='text-2xl text-amber-500'>Area Candidates</div>

        <div className='flex flex-wrap gap-12 w-full lg:px-44  justify-center'>

          {selectedCity == "Ganganagar" ?
            (
              candidateArray.map((candidate, index) =>
                <div onClick={() =>handleClick(candidate.id)} key={index} className={`flex flex-col hover:bg-amber-50 px-3 py-2 rounded-2xl gap-2 justify-center cursor-pointer  ${activeIndex == candidate.id ? "bg-amber-100 hover:bg-amber-100" : "bg-white hover:bg-amber-50"}`}>
                  <div  style={{backgroundImage: `url(${candidate.photo})`}} className='h-40  bg-cover rounded-2xl border w-50'>
                    {/* dynanmic images k liye we dont use tailwind -> we use style -> 2 curly braces -> 1 tells it tells jsx , here comes javascript code, second pair -> is the actual javascript object for styles */}
                  </div>

                  <div className='text-center text-lg font-semibold'>{candidate.name}</div>

                  <div className='flex items-center gap-4 justify-center'>
                    <div style={{backgroundImage: `url(${candidate.symbol})`}} className='h-9 bg-center w-9 bg-contain border rounded-full'></div>
                    <div className='text-center max-w-30 text-sm font-semibold text-gray-500' >{candidate.party}</div>
                  </div>
                </div>

              )
            ) : (<p>No candidate data available for this city (Prototype Data)</p>)}
        </div>


            <Buttons back="/loksabhavoting/selectlocation" next="/loksabhavoting/complete"/>

        <div>

        </div>
      </div>




    </>
  )
}

export default ChooseCandidates