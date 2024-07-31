import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";
import authScreenAtom from "../atoms/authAtom";

const AuthPage = () => {
	
    // When the state of an atom is updated using the set function, Recoil detects this change.
    // Recoil maintains a dependency graph of atoms and selectors. When an atom changes, 
    // Recoil looks up the dependency graph to see which components (or selectors) are dependent on this atom.

    // Once Recoil identifies which components are affected by the state change,
    //  it triggers a re-render for these components.
    // The component re-renders with the updated state, ensuring the UI reflects the latest state.

	const authScreenState = useRecoilValue(authScreenAtom);

	return <>{authScreenState === "login" ? <LoginCard /> :<SignupCard/> }</>;
};

export default AuthPage;
