module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ["plugin:vue/essential", "eslint:recommended"],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		parser: "babel-eslint"
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
	}
};
