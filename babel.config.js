module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						"@screens/*": ["app/screens/*"],
						"@navigations/*": ["app/navigations/*"],
						"@atoms/*": ["app/components/atoms/*"],
						"@molecules/*": ["app/components/molecules/*"],
						"@organisms/*": ["app/components/organisms/*"],
						"@context/*": ["app/context/*"],
						"@interfaces/*": ["app/interfaces/*"],
						"@themes/*": ["app/themes/*"],
					},
				},
			],
		],
	};
};
