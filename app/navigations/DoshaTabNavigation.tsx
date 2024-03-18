import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useStore } from "@context/RootContext";
import { Dosha } from "@interfaces/data";
import UnifiedScreen from "@screens/UnifiedScreen";

const DoshaTab = createBottomTabNavigator();

const DoshaTabNavigation = () => {
	const { data } = useStore();

	// Create a tab for each dosha dynamically while mapping through the data
	const doshaTabScreens = Object.keys(data?.dosha).map((key, index) => {
		return (
			<DoshaTab.Screen
				name={key}
				component={UnifiedScreen}
				initialParams={{ data: data?.dosha[key as keyof Dosha] }}
				key={index}
			/>
		);
	});

	return <DoshaTab.Navigator>{doshaTabScreens}</DoshaTab.Navigator>;
};

export default DoshaTabNavigation;
