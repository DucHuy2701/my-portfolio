module.exports = {
    env:{browser: true, es2021: true},
    extends:["eslint:recommended", "plugin:react/recommended", "prettier"],
    parseOptions: {ecmaVersion: "latest", sourceType: "module"},
    plugin: ["react"],
    settings: {react: {version: "detect"}},
    rules:{
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
    },
};