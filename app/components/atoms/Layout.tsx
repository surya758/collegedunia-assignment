import { StyleSheet, View, ViewStyle, ScrollView } from "react-native";
import React, { PropsWithChildren } from "react";

type LayoutProps = {
	style?: ViewStyle | ViewStyle[];
	type?: "flat";
};

const Layout = ({ style, type, children }: PropsWithChildren<LayoutProps>) => {
	// If type is specifically flat, return a View component, else just return a ScrollView component
	return type === "flat" ? (
		<View style={[styles.outerContainer, style]}>{children}</View>
	) : (
		<ScrollView style={[styles.outerContainer, style]} showsVerticalScrollIndicator={false}>
			{children}
		</ScrollView>
	);
};

export default Layout;

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		marginHorizontal: 20,
	},
});
