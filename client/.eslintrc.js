export default {
  extends: [
      "eslint-config-airbnb-base",
      "eslint-config-airbnb-typescript",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:react/recommended",
      "plugin:prettier/recommended"
  ],
  plugins: ["prettier", "@typescript-eslint"],
  env: {
      "es6": true
  },
  rules: {
      "react/prop-types": 1,
      "import/imports-first": ["error", "absolute-first"],
      "quotes": [
          "error",
          "single",
          {
              "allowTemplateLiterals": true
          }
      ],
      "camelcase": "warn",
      "no-unused-vars": "warn",
      "jsx-quotes": ["error", "prefer-double"],
      "import/prefer-default-export": 0,
      "import/newline-after-import": "error",
      "import/no-named-as-default": "off",
      "no-console": 0,
      "prefer-destructuring": 0,
      "no-shadow": 0,
      "comma-dangle": 0,
      "max-len": [
          "error",
          {
              "code": 200
          }
      ],
      "object-curly-newline": 0,
      "array-callback-return": 0,
      "class-methods-use-this": "off",
      "no-alert": "off",
      "semi": "error"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
      ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
      ecmaFeatures: {
          jsx: true // Allows for the parsing of JSX
      }
  },

  settings: {
      react: {
          version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
      }
  }
}
