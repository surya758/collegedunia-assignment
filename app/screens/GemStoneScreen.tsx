import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "@atoms/Layout";
import { useStore } from "@context/RootContext";
import { Gemstone, GemStoneData } from "@interfaces/data";
import { colors } from "@themes/colors";

type GemKeyValueProps = {
	data: Gemstone;
};

const GemStoneScreen = () => {
	const { data } = useStore();
	const gemstones = data?.gemstones[0]?.data;

	const GemKeyValue = ({ data }: GemKeyValueProps) => {
		return (
			<View>
				{Object.keys(data).map((key, index) => {
					return (
						<View key={index} style={styles.gemKeyValueContainer}>
							<Text>{key}</Text>
							<Text>{data[key as keyof Gemstone]}</Text>
						</View>
					);
				})}
			</View>
		);
	};

	return (
		<Layout>
			{Object.keys(gemstones).map((key, index) => {
				return (
					<View key={index}>
						<Text style={styles.title}>{key}</Text>
						<GemKeyValue data={gemstones[key as keyof GemStoneData]} />
					</View>
				);
			})}
		</Layout>
	);
};

export default GemStoneScreen;

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "bold",
		paddingVertical: 10,
		paddingBottom: -10,
	},
	gemKeyValueContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: colors.lightGrey,
	},
});
