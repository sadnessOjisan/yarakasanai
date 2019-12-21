import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";

const config = {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    babel(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

export default config;
