// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [
//           { loader: "style-loader" },
//           { loader: "css-loader?modules&localIdentName=[folder]-[emoji]-[local]-[hash:base64:5]" },
//           { loader: "sass-loader" }
//         ]
//       },
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader'
//       }
//     ]
//   },
//   resolve: {
//     extensions: [ // 拡張子なしでも import できる
//       '.ts', '.tsx', ".js", ".json"
//     ]
//   }
// };

// const path = require("path");

// module.exports = (baseConfig, env, defaultConfig) => {
//   // Extend defaultConfig as you need.
// console.log("testtttttttttttttttt" + path.resolve(__dirname, "../src/components/atoms/Title/index.story.tsx"));

//   // For example, add typescript loader:
//   defaultConfig.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     include: path.resolve(__dirname, "../src/components/atoms/Title/"),
//     loader: require.resolve("ts-loader")
//   });
//   defaultConfig.resolve.extensions.push(".ts", ".tsx");
//   return defaultConfig;
// };

// const path = require("path");
// const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
// module.exports = (baseConfig, env, config) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     loader: require.resolve("ts-loader")
//   });
//   config.plugins.push(new TSDocgenPlugin()); // optional
//   config.resolve.extensions.push(".ts", ".tsx");
//   return config;
// };

const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    loader: require.resolve("ts-loader")
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};

