const { resolve } = require("path");

module.exports = {
  root: true,

  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier"
  ],

  parserOptions: {
    extraFileExtensions: ['.vue'],
    ecmaVersion: 12,
    sourceType: "module",
    project: resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    parser: "@typescript-eslint/parser",
  },

  plugins: ["@typescript-eslint", "vue", "import"],

  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],

    "prettier/prettier": [
      "warn",
      {
        "singleQuote": true,
        "semi": true,
        "tabWidth": 2,
        "trailingComma": "all",
        "printWidth": 100,
        "bracketSameLine": false,
        "useTabs": false,
        "arrowParens": "always",
        "endOfLine": "auto"
      }
    ],

    "import/order": [
      "error", {
        groups: [
          "builtin", "external", "internal", "parent", "sibling", "index", "type"
        ],
        pathGroups: [
          // Types
          {
            pattern: "**/types/**",
            group: "type"
          },
          // Assets
          {
            pattern: "assets/**",
            group: "internal",
            position: "before"
          },
          // Routes
          {
            pattern: "router/**",
            group: "internal",
            position: "before"
          },
          // Composables
          {
            pattern: "composables/**",
            group: "internal",
            position: "before"
          },
          // Components (.tsx extension)
          {
            pattern: "pages/**/*.tsx",
            group: "internal",
          },
          {
            pattern: "components/**/*.vue",
            group: "internal",
          },
          {
            pattern: "**App.vue",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc"
        },
        "newlines-between": "never"
      }],
    // To have alphabetical order on named imports
    // import { a, b, c } from "foo";
    "sort-imports": ["error",
      {
        ignoreDeclarationSort: true,
        ignoreCase: true
      }],

    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variableLike",
        format: [
          "camelCase", "UPPER_CASE", "PascalCase"
        ]
      },
      {
        selector: "typeLike",
        format: [
          "PascalCase"
        ]
      },
      {
        selector: "enumMember",
        format: [
          "UPPER_CASE", "PascalCase"
        ]
      },
      {
        selector: "variable",
        "types": [
          "boolean"
        ],
        format: [
          "PascalCase"
        ],
        prefix: [
          "is", "are", "should", "has", "have", "can", "did", "will"
        ]
      }
    ]
  }
}
