module.exports = {
  extends: "airbnb-typescript-prettier",
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        "import/no-mutable-exports": 0,
        "prettier/prettier": 1,
      },
    },
    {
      files: ["*.config.js"],
      rules: {
        "import/extensions": 0,
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
  ],
  plugins: ["svelte3", "no-only-tests", "typescript-sort-keys"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: [],
        trailingUnderscore: "forbid",
      },
      {
        selector: "enumMember",
        format: ["PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          ["internal", "parent", "sibling", "index"],
        ],
      },
    ],
    "import/prefer-default-export": 0,
    "no-only-tests/no-only-tests": 2,
  },
  settings: {
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    "svelte3/typescript": require("typescript"),
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    "svelte3/ignore-styles": () => true,
  },
};
