import { StyleSheet, Text, View } from "react-native";
import React from "react";

type ParagraphProps = {
	data: string | string[];
};

const Paragraph = ({ data }: ParagraphProps) => {
	const isObject = typeof data === "object" && !Array.isArray(data);

	// if data is an object, handle it this way (object and array coming here can be considered special case)
	// since KEY_PARAGRAPH was supposed to only have data and and a string | string[] associated with it
	if (isObject) {
		return Object.keys(data).map((key, index) => {
			return (
				<View key={index}>
					<Text>{key}</Text>
					<Text>{data[key]}</Text>
				</View>
			);
		});
	}

	// if its an array, handle it this way
	if (Array.isArray(data)) {
		return data.map((item, index) => {
			return <Text key={index}>{item}</Text>;
		});
	}

	// else turn it to string and return it
	return <Text>{data.toString()}</Text>;
};

export default Paragraph;

const styles = StyleSheet.create({
	container: { flexDirection: "row", flexWrap: "wrap" },
});
