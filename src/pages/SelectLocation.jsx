import React from 'react'
import constituencies from '../utils/constituencies.json'
import { useSelector, useDispatch } from 'react-redux';
import { setState, setCity } from '../features/VoteSlice'

const SelectLocation = () => {

    const selectedCity = useSelector((state) => state.voteSlice.city);
    const selectedState = useSelector((state) => state.voteSlice.state);
    const dispatch = useDispatch();



    const handleStateChange = (e) => {
        dispatch(setState(e.target.value));

        // clear the city:
        dispatch(setCity(""));

    };

    const handleCityChange = (e) => {
        dispatch(setCity(e.target.value));
    }


    const states = Object.keys(constituencies); // constituencies after importing has become a regular javascript object -> and we're accessing its keys using Object.keys(constituencies)

    console.log(states);

    return (
        <>


            <div className='w-full border flex flex-col justify-around h-screen items-center'>
                <div className='h-fit border px-7 py-12 rounded-2xl flex flex-col gap-7'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-xl max-sm:text-lg text-center font-semibold text-amber-500'>Select your State</div>
                        <select
                            className='border shadow-md px-3 py-2 rounded-sm'
                            value={selectedState}
                            onChange={handleStateChange}
                        >
                            {states.map((state, index) => {
                                return (
                                    <option className='text-lg max-sm:text-sm' key={state} value={state}>{state}</option>
                                )

                            })}
                        </select>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className='text-xl max-sm:text-lg text-center font-semibold text-amber-500'>Select your City</div>

                        <select
                            className='border shadow-md px-3 py-2 rounded-sm'
                            value={selectedCity}
                            onChange={handleCityChange}
                        >
                            {
                                selectedState && constituencies[selectedState] && (

                                    constituencies[selectedState].map((city, index) => {
                                        return <option className='text-lg max-sm:text-sm' key={city} value={city}>{city}</option>
                                    }))

                            }
                        </select>
                    </div>
                </div>


                <div className='flex justify-between w-full px-20'>
                    <button className='text-gray-400 font-semibold shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-8 py-2 rounded-full'>Back</button>
                    <button className='text-white bg-amber-500 px-8 py-2 rounded-full font-semibold'>Next</button>
                </div>






            </div>




        </>
    )
}

export default SelectLocation

