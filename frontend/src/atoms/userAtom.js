import { atom } from "recoil";

// An atom represents a piece of state.
//atoms are the states which are shared across some of the components
//A selector(kind of reducer) represents a piece of derived state. 
//It is a pure function that can read from atoms or other selectors and compute a new value based on that state. 


const userAtom = atom({
	key: "userAtom",
	default: JSON.parse(localStorage.getItem("user-threads")),
});

export default userAtom;
