import React from 'react'
import constituencies from '../utils/constituencies.json'
import { useSelector, useDispatch } from 'react-redux';
import { setState, setCity } from '../features/VoteSlice'
import Buttons from '../components/Buttons';

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
                <div className='h-fit border px-7 py-17 rounded-2xl flex flex-col gap-7'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-xl max-sm:text-lg text-center font-semibold text-amber-500'>Select your State</div>
                        <select
                            className='border shadow-md px-2 py-2 rounded-sm'
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

                <Buttons back="/loksabhavoting" next="/loksabhavoting/choosecandidate"/>



            </div>




        </>
    )
}

export default SelectLocation

