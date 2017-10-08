module.exports = require('babel-jest').createTransformer({
  "plugins": ["transform-class-properties"],
  "presets": ["stage-2", "react", "airbnb"]
});
