module.exports = {
  extends: "airbnb-typescript-prettier",
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        "import/first": 0,
        "import/no-duplicates": 0,
        "import/no-mutable-exports": 0,
        "prettier/prettier": 0,
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
  plugins: [
    "svelte3",
    "no-only-tests",
    "typescript-sort-keys",
    "eslint-plugin-sort-keys-fix",
  ],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: [],
        selector: "default",
        trailingUnderscore: "forbid",
      },
      {
        format: ["PascalCase"],
        selector: "enumMember",
      },
      {
        format: ["PascalCase"],
        selector: "typeLike",
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          ["internal", "parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
    "import/prefer-default-export": 0,
    "no-only-tests/no-only-tests": 2,
    "sort-keys-fix/sort-keys-fix": 1,
  },
  settings: {
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    "svelte3/ignore-styles": () => true,

    "svelte3/typescript": true,
  },
};
