var Opal = require('opal-runtime').Opal;
require('./opal-builder.js');

Opal.require('nodejs');
Opal.require('opal-builder');

/**
 * Convert a JSON to an (Opal) Hash.
 * @private
 */
var toHash = function (object) {
  if (object && !object.smap) {
    return Opal.hash(object);
  }
  return object;
};

var Builder = Opal.const_get_qualified(Opal.const_get_relative([], 'Opal'), 'Builder');

// Public API

Builder['$$class'].prototype.create = function () {
  return this.$new();
};

Builder.prototype.appendPaths = function (paths) {
  this.$append_paths(paths);
};

Builder.prototype.setCompilerOptions = function (options) {
  this.compiler_options = toHash(options);
};

Builder.prototype.build = function (path, options) {
  return this.$build(path, toHash(options));
};

Builder.prototype.toString = function () {
  return this.$to_s();
};

module.exports.Builder = Builder;
