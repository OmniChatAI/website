const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        type: 'asset/source'
      }
    ]
  }
}; 