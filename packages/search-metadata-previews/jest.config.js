/** @type {import('jest').Config} */
const config = {
	testMatch: [
		"**/*Test.[jt]s",
	],
	testURL: "http://localhost",
	setupTestFrameworkScriptFile: "<rootDir>/tests/setupTests.js",
	moduleNameMapper: {
		"^lodash-es$": "lodash",
		"^lodash-es/(.*)$": "lodash/$1",
		"\\.css$": "<rootDir>/tests/CSSStub.js",
	},
	collectCoverageFrom: [
		"src/**/*.{js,jsx,ts,tsx}",
	],
	coverageReporters: [
		"json",
		"lcov",
		"text",
		"clover",
		"text-summary",
	],
};

module.exports = config;
