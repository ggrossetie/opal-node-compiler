var Opal = require('opal-runtime').Opal;
require('./opal-builder.js');

Opal.require('nodejs');
Opal.require('opal-builder');

module.exports.Builder = Opal.const_get_qualified(Opal.const_get_relative([], 'Opal'), 'Builder');
