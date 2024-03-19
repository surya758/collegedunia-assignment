import React, { useEffect, createContext, useState, PropsWithChildren, useContext } from "react";

import { Data } from "@interfaces/data";
import Loading from "@atoms/Loading";

export type RootContextProps = {
	data: Data;
	isDataAvailable: boolean;
};

const RootContext = createContext<RootContextProps | {}>({});

const RootProvider = ({ children }: PropsWithChildren) => {
	const [data, setData] = useState<Data | {}>({});

	const isDataAvailable = Object.keys(data).length > 0;

	useEffect(() => {
		fetch("https://harpreetcd.github.io/reactnative.json")
			.then((response) => response.json())
			.then((res) => setData(res))
			.catch((err) => console.log(err));
	}, []);

	// if data isnt available, show loading, else show children
	return !isDataAvailable ? (
		<Loading />
	) : (
		<RootContext.Provider value={{ data, isDataAvailable }}>{children}</RootContext.Provider>
	);
};

// custom hook to use the context
const useStore = () => useContext(RootContext) as RootContextProps;

export { useStore, RootProvider };
