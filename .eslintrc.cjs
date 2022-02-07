module.exports = {
  extends: [
    "airbnb-typescript-prettier",
    "plugin:typescript-sort-keys/recommended",
  ],
  globals: {
    google: "readonly",
  },
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
    {
      extends: ["plugin:jest/recommended"],
      files: ["**/__tests__/**/*.ts"],
      rules: {
        "jest/consistent-test-it": ["error", { fn: "test" }],
        "jest/expect-expect": [
          "error",
          {
            assertFunctionNames: [
              "expect",
              "assert*",
              "screen.find*By*",
              "screen.get*By*",
            ],
          },
        ],
        "jest/no-alias-methods": "error",
        "jest/no-large-snapshots": "error",
        "jest/no-restricted-matchers": [
          "error",
          {
            toBeFalsy: "Best to use a more explicit matcher",
            toBeTruthy: "Best to use a more explicit matcher",
          },
        ],
        "jest/no-standalone-expect": [
          "error",
          { additionalTestBlockFunctions: ["it.each"] },
        ],
        "jest/prefer-called-with": "error",
        "jest/prefer-strict-equal": "error",
        "jest/prefer-to-be": "error",
        "jest/prefer-to-have-length": "error",
      },
    },
  ],
  plugins: ["svelte3", "typescript-sort-keys", "eslint-plugin-sort-keys-fix"],
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
    "@typescript-eslint/no-unused-vars": [
      "error",
      { args: "all", ignoreRestSiblings: true, vars: "all" },
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
    "sort-keys-fix/sort-keys-fix": 1,
  },
  settings: {
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    "svelte3/ignore-styles": () => true,

    "svelte3/typescript": true,
  },
};
