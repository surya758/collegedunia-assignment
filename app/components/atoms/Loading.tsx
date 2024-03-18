import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const Loading = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size='small' color={colors.black} />
		</View>
	);
};

export default Loading;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
