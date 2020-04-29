const globals = {
  __proto__: null,
  tslib: "tslib",
};

function external(id) {
  return id in globals;
}

export default [{
  input: "lib/brane.js",
  external,
  output: {
    file: "lib/brane.cjs.js",
    format: "cjs",
    exports: "named",
    sourcemap: true,
    name: "brane",
    globals,
  },
}];
