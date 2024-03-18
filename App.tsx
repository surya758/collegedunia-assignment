import "react-native-gesture-handler";

import React from "react";

import { RootProvider } from "@context/RootContext";
import RootTabNavigation from "@navigations/RootTabNavigation";

const App = () => {
	return (
		<RootProvider>
			<RootTabNavigation />
		</RootProvider>
	);
};

export default App;
