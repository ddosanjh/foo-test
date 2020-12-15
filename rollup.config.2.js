import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";

import packageJson from "./package.json";

export default {
    input: "src/FooVueComponent.vue",
    output: [
        {
            format: "esm",
            file: packageJson.module,
            sourcemap: true
        }
    ],
    plugins: [peerDepsExternal(), vue()]
};