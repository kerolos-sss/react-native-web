console.log("STARTING MOBILE")
module.exports = {
  "plugins": [
    ["@babel/plugin-transform-typescript", { "allowNamespaces": true }]
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
