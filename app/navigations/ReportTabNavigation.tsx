import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UnifiedScreen from "@screens/UnifiedScreen";
import { useStore } from "@context/RootContext";
import { Report } from "@interfaces/data";

const ReportTab = createBottomTabNavigator();

const ReportTabNavigation = () => {
	const { data } = useStore();

	// Create a tab for each report dynamically while mapping through the data
	const reportTabScreens = Object.keys(data?.report).map((key, index) => {
		return (
			<ReportTab.Screen
				name={key}
				component={UnifiedScreen}
				initialParams={{ data: data?.report[key as keyof Report] }}
				key={index}
			/>
		);
	});

	return <ReportTab.Navigator>{reportTabScreens}</ReportTab.Navigator>;
};

export default ReportTabNavigation;
