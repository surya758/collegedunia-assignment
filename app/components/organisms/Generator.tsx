import React from "react";
import KeyParagraph from "@molecules/KeyParagraph";
import Paragraph from "@atoms/Paragraph";
import Table from "@molecules/Table";
import KeyValue from "@molecules/KeyValue";

type Type = "KEY_VALUE" | "PARAGRAPH" | "TABLE" | "KEY_PARAGRAPH";

type Item = {
	data: any;
	type: Type;
	heading: string;
};

type Data = {
	data: any;
};

const Generator = ({ data }: Data) => {
	const dataNew = data.data;

	return dataNew.map((item: Item, index: number) => {
		// Render the component based on the type
		if (item.type === "KEY_VALUE") {
			return <KeyValue data={item.data} key={index} />;
		}
		if (item.type === "PARAGRAPH") {
			return <Paragraph data={item.data} key={index} />;
		}
		if (item.type === "TABLE") {
			return <Table data={item.data} key={index} />;
		}
		if (item.type === "KEY_PARAGRAPH") {
			return <KeyParagraph data={item.data} key={index} />;
		}
	});
};

export default Generator;
