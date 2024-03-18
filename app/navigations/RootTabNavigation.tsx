import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { useStore } from "@context/RootContext";
import GemStoneScreen from "@screens/GemStoneScreen";
import DoshaTabNavigation from "@navigations/DoshaTabNavigation";
import ReportTabNavigation from "@navigations/ReportTabNavigation";
import UnifiedScreen from "@screens/UnifiedScreen";

const Tab = createBottomTabNavigator();

const RootTabNavigation = () => {
	const { data } = useStore();

	// get houseCuspsAndSandhi from data
	const houseCuspsAndSandhi = data?.houseCuspsAndSandhi;

	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName='report'>
				<Tab.Screen
					name='report'
					component={ReportTabNavigation}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name='houseCuspsAndSandhi'
					component={UnifiedScreen}
					initialParams={{ data: houseCuspsAndSandhi }}
				/>
				<Tab.Screen name='dosha' component={DoshaTabNavigation} options={{ headerShown: false }} />
				<Tab.Screen name='gemstones' component={GemStoneScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default RootTabNavigation;

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
