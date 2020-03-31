module.exports = {
  runner: "jest-runner-tsc",
  displayName: "tsc",
  moduleFileExtensions: ["js", "ts", "tsx"],
  testMatch: ["<rootDir>/test/*.ts", "<rootDir>/output/*.ts"]
};
