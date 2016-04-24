var Opal = require('opal-runtime').Opal;
require('./opal-builder.js');

Opal.require('nodejs');
Opal.require('opal-builder');

module.exports.Builder = ((Opal.get('Opal')).$$scope.get('Builder'));
