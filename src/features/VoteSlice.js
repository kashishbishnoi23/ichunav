import {createSlice} from '@reduxjs/toolkit';

export const voteSlice = createSlice({
    name:'vote', // name of the slice
    // defining the initial states of all states
    initialState:{
        state:'Andaman and Nicobar Islands',
        city:'Ganganagar',
        candidate:''
    },
    reducers:{
        // reducers me ek to old state hoti hai aur action hota hai -> action me they might have passed some value -> which is received using action.payload
      setState : (state, action) =>{
        state.state = action.payload;
      },
      setCity : (state, action) =>{
        state.city = action.payload; 
      },  
      setCandidate:(state, action) =>{
        state.candidate = action.payload;
      }
    }

})

export const {setState, setCity, setCandidate} = voteSlice.actions;

export default voteSlice.reducer; // register the reducer to the store -> taki hamare store ko pata ho ki this slice exists and it has these reducer functions