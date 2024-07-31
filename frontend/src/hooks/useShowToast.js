import { useToast } from "@chakra-ui/toast";
import { useCallback } from "react";

const useShowToast = () => {
	const toast = useToast();

	// Optimizing Performance: Use useCallback when passing callbacks to child components
	//  that rely on reference equality to prevent unnecessary re-renders. 
	//  This is especially useful when passing callbacks to deeply nested components or components that frequently re-render.
   // in all component which is using it , this fn is not going to be called each time hence optimized


   // it is different from usememo hook bcoz it contains value else it is same

	const showToast = useCallback(
		(title, description, status) => {
			toast({
				title,
				description,
				status,
				duration: 3000,
				isClosable: true,
			});
		},
		[toast]
	);

	return showToast;
};

export default useShowToast;
