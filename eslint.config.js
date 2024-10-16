// eslint.config.js
/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    languageOptions: {
      globals: {
        // Define your globals here, e.g.:
        browser: true,
        module: true,
        require: true,
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module", // Use 'module' for ES6 imports/exports
      },
    },
    files: ["*.js"],
    rules: {
      // Add your custom rules here
      "no-undef": "error", // Example rule
    },
  },
];

module.exports = config;
