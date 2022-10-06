module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],

  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: ["import"],
  rules: {
    "quotes": ["error", "double"],
    "max-len": ["error", 120],
  },
};
