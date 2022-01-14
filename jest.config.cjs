module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.{svelte,ts}"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  coverageReporters: ["html", "text", "text-summary"],
  // coverageThreshold: {
  //   global: { branches: 50, functions: 90, lines: 90, statements: 90 },
  // },
  moduleFileExtensions: ["js", "ts", "svelte"],
  setupFiles: ["<rootDir>/test/setup.ts"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  testRegex: "/__tests__/.*\\.test\\.ts$",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
    "^.+\\.ts$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/?!(svelte-routing|svelte-click-outside)",
  ],
};
