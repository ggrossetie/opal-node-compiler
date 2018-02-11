var Opal = require('opal-runtime').Opal;
var Builder = require('../src/index').Builder;

describe('Opal node compiler', function () {

  describe('When loaded', function() {
    it('Opal should not be null', function() {
      expect(Opal).not.toBe(null);
    });

    it('Builder should not be null', function() {
      expect(Builder).not.toBe(null);
    });

    it('builder should compile a simple hello world', function() {
      var builder = Builder.create();
      var result = builder.build('spec/fixtures/hello.rb');
      expect(result.toString()).toMatch(/self\.\$puts\("Hello world"\)/);
    });

    it('builder should compile a simple hello world library', function() {
      var builder = Builder.create();
      builder.appendPaths('spec/fixtures/hello-ruby/lib');
      builder.appendPaths('src/stdlib');
      var result = builder.build('hello');
      expect(result.toString()).toMatch(/self\.\$puts\("Hello world"\)/);
    });
  });
});
