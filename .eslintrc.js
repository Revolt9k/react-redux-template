module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "prettier"],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.js"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    createDefaultProgram: true
  },
  rules: {
    "no-param-reassign": "warn",
    "no-shadow": "warn",
    "@typescript-eslint/no-shadow": "warn",
    "import/prefer-default-export": "warn",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "warn",
    "react/react-in-jsx-scope": "warn",
    "react/jsx-props-no-spreading": "warn",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off"
  }
};
