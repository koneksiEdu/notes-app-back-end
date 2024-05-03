const globals = require('globals');
const { FlatCompat } = require('@eslint/eslintrc');
const pluginJs = require('@eslint/js');
const babelParser = require('@babel/eslint-parser');

// mimic CommonJS variables -- not needed if using CommonJS
/* eslint no-underscore-dangle: 0 */

const compat = new FlatCompat({
  baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended,
});

module.exports = [
  {
    files: ['**/*.js'],
  },
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ['@babel/preset-env'],
        },
      },
    },
  },
  ...compat.extends('airbnb-base'),
];
