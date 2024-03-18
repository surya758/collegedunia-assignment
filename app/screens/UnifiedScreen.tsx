import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "@atoms/Layout";
import Generator from "@organisms/Generator";
import { useRoute } from "@react-navigation/native";

const UnifiedScreen = () => {
	const data = useRoute().params;

	return <Layout>{data && <Generator data={data} />}</Layout>;
};

export default UnifiedScreen;

const styles = StyleSheet.create({});
