import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const config = {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [babel()]
};

export default config;
