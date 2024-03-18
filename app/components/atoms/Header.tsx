import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
type HeaderProps = {
	arrOfTitle?: string[];
	style?: ViewStyle;
};

const Header = ({ arrOfTitle, style }: HeaderProps) => {
	const titles = arrOfTitle ?? ["Key", "Value"];
	const numOfTitle = titles.length;
	const maxWidth = 100 / numOfTitle + "%";

	return (
		<View style={[styles.container, style]}>
			{titles.map((item, index) => (
				<Text key={index} style={[styles.text, { maxWidth: maxWidth }]}>
					{item.toUpperCase()}
				</Text>
			))}
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: colors.primary,
		paddingVertical: 8,
		borderRadius: 8,
		marginVertical: 10,
	},
	text: { color: colors.white, fontWeight: "bold" },
});
