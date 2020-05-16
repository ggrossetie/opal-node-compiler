# Opal Compiler for Node.js

[![Travis build status](https://img.shields.io/travis/Mogztter/opal-node-compiler/master.svg)](https://travis-ci.org/Mogztter/opal-node-compiler)
[![Appveyor build status](https://ci.appveyor.com/api/projects/status/i4l3eqm88rwq6m01/branch/master?svg=true)](https://ci.appveyor.com/project/Mogztter/opal-node-compiler)
[![npm version](http://img.shields.io/npm/v/opal-compiler.svg)](https://www.npmjs.org/package/opal-compiler)

Transpile Ruby code to JavaScript in JavaScript!

## Usage

Given a Ruby file named `hello.rb`:

```ruby
puts "Hello world"
```

The following code will transpile `hello.rb` to JavaScript:

```javascript
var Builder = require('opal-compiler').Builder;
// Opal object will be available on the global scope

var builder = Builder.create();
var result = builder.build('hello.rb').toString();
console.log(result);
//(function(Opal) {
//  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

//  Opal.add_stubs(['$puts']);
//  return self.$puts("Hello world")
//})(Opal);
```
