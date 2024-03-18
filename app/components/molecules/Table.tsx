import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@atoms/Header";
import { HouseCuspAndSandhiData } from "@interfaces/data";
import { colors } from "@themes/colors";

type TableProps = {
	data: HouseCuspAndSandhiData[];
};

const Table = ({ data }: TableProps) => {
	// Get the headings from a single data
	const headings = Object.keys(data[0]);

	return (
		<View>
			<Header arrOfTitle={headings} />
			{/*  Map through the data and render the rows */}
			{data.map((item, index) => (
				<View style={styles.container} key={index}>
					{Object.keys(item).map((key, index) => (
						<Text key={index} style={styles.rowsText}>
							{item[key as keyof HouseCuspAndSandhiData]}
						</Text>
					))}
				</View>
			))}
		</View>
	);
};

export default Table;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: colors.lightGrey,
	},
	rowsText: { paddingVertical: 10 },
});
