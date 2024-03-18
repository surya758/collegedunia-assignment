import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import Header from "@atoms/Header";
import { FavourablePointData } from "@interfaces/data";

type KeyValueProps = {
	data: FavourablePointData;
};

const KeyValue = ({ data }: KeyValueProps) => {
	return (
		<View>
			<Header />
			{/* Map through the data and render the rows */}
			{Object.keys(data).map((item) => {
				return (
					<View style={styles.container} key={item}>
						<Text style={styles.cell}>{item}</Text>
						<Text style={styles.cell} numberOfLines={1}>
							{data[item as keyof FavourablePointData]}
						</Text>
					</View>
				);
			})}
		</View>
	);
};

export default KeyValue;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		paddingVertical: 8,
		borderColor: colors.lightGrey,
	},
	cell: {
		maxWidth: "50%",
	},
});
