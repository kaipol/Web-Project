module.exports = {
    env: {
        browser: true,
    },
    extends: "eslint:recommended",
    rules: {
        indent: ["error", "tab"],
        "linebreak-style": ["error", "windows", "unix"],
        quotes: ["error", "double", "single"],
        semi: ["error", "always"],
    },
};
