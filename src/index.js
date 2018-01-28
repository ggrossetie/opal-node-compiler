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

Builder['$$class'].$$proto.create = function () {
  return this.$new();
};

Builder.$$proto.appendPaths = function (paths) {
  this.$append_paths(paths);
};

Builder.$$proto.setCompilerOptions = function (options) {
  this.compiler_options = toHash(options);
};

Builder.$$proto.build = function (path, options) {
  return this.$build(path, toHash(options));
};

Builder.$$proto.toString = function () {
  return this.$to_s();
};

module.exports.Builder = Builder;
