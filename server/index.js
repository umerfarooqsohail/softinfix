require("ignore-styles");
require("bootstrap");
require("bootstrap")
require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./Server");
