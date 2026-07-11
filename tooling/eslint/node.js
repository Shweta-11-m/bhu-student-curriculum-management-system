import globals from "globals";
import baseConfig from "./base.js";

export default [
  ...baseConfig,
  {
    files: ["**/*.{js,cjs,mjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
  },
];
