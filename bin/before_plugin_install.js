'use strict';

module.exports = function (context) {
  var req:any = context.require,

      path = req ('path'),
      pathParse = require ('./lib/path-parse');

  path.parse = path.parse || pathParse;

  return true;
};
