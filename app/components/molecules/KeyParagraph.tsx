import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import Paragraph from "@atoms/Paragraph";

const KeyParagraph = ({ data }: any) => {
	return Object.keys(data).map((key, index) => {
		return (
			<View style={styles.container} key={index}>
				<View style={styles.line}>
					<Text style={styles.label}>{key}</Text>
				</View>
				<Paragraph data={data[key]} />
			</View>
		);
	});
};

export default KeyParagraph;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	line: {
		borderBottomWidth: 1,
		borderBottomColor: colors.lightGrey,
	},
	label: {
		fontWeight: "700",
	},
});
