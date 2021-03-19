module.exports = {
  extends: ["./node_modules/gts/", "prettier", "prettier/react"],
  plugins: ["prettier"],
  env: {
    browser: true,
  },
  ignorePatterns: ["public/**/*", "models", "amplify/**/*"],
  rules: {
    "prettier/prettier": "error",
    quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "object-curly-spacing": [2, "always", { objectsInObjects: false, arraysInObjects: true }],
    "no-empty-pattern": 0,
    "node/no-unpublished-import": 0,
    "node/no-extraneous-import": 0,
    "max-len": [2, { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
  },
  overrides: [
    {
      files: ["aws-exports.js"],
      extends: "./node_modules/gts/",
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        "node/no-unpublished-import": 0,
      },
    },
  ],
};
