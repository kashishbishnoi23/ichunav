// context API ka use krke agar ham state management krte hain -> problem ati hai prop drilling ki -> iska matlab -> there's a hierarchy -> parent component -> child1 -> grandchild1 , so parent component se props pass krne padte hain children ko -> fir aage wale components ko -> very inefficient

// so we use redux toolkit -> global state management library -> isme ek store hota hai -> us store me sari states store hongi -> ab un states ko kisi bhi component me use kiya ja sakta hai

// slice ->har feature ki state manage krne ka logic slice k andar hota hai -> intial state likhi jayegi -> state aur reducer function slice me likha jata hai -> jase cart management ki slice hai -> it can have many reducer functions like addtocart, remove etc -> slice me hi hamari state aur reducer functions pade hote hain

// reducer -> functions hote hain -> data ko update krne ka logic jin functions me likha jata hai -> known as reducers

// state -> data -> jiski state ham manage krna chahte hain


// store -> single source of truth for the entire application state -> isme ham sari ki sari slices ko combine karte hain

// configureStore -> function jo simply store create krne ke kaam aata hai -> is function me ham ek object pass krte hain -> is store me ham sari slices store krwate hain -> har feature k liye different slice hoti hai 

// each slice stores the states and reducer functions related to that specific feature


// whole flow:

/* for instance, we have a state called count -> we have to increment/decrement its value and update the UI
jase hi ham + button pe click krenge -> onClick event trigger hoga -> isme function hai -> handleClick() -> ye handleClick function -> increment action ko dispatch krega....

hamne ek slice create ki hui hai -> usme count ki initial state stored hai , plus reducer functions stored hain -> increment, decrement etc.. ham is slice ko register krenge apne store me -> taki hamare store ko pata ho ki ye ye slices available hain

ab manlo hamne configStore -> me counter: countReducer , naam se store kraya hai -> so this counter now refers to the slice which will manage the state of counter variable

jab increment action dispatch hoke aata hai -> vo behind the scenes counter/increment ki form me ata hai -> store counter naam ki slice dhundhta hai -> its key points to all the reducer functions that can change the state of counter -> isme increment naam ka function milta hai -> function runs -> change the state of counter -> is state ko ham UI me useSelector hook se access krte hain


*/

import voteReducer from '../features/VoteSlice'

import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({ // used to create store
    reducer:{
        // we'll store all the slices reducer functions here:
        voteSlice: voteReducer // by default voteReducer ko export kiya hua hai VoteSlice me so -> by default vo ayega
    }
})

