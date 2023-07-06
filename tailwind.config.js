const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./pages/**/*.js",
		"./pages/**/*.ts",
		"./pages/**/*.css",
		"./pages/**/*.vue",
	],
	variants: {
		extend: {
			opacity: ['hover'],
			translate: ['group-hover'],
		},
	},
	theme: {
		screens: {
			xs: "400px",

			sm: "640px",

			md: "768px",

			lg: "1024px",

			tablet: "1200px",

			xl: "1280px",

			"macbook-13": "1440px",

			"2xl": "1600px",

      },
    },
};