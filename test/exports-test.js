// Generated by CoffeeScript 1.3.1
(function() {
  var ms, should;

  should = require('should');

  ms = require('../lib/make-sync');

  describe("exports", function() {
    it("starting with lowercase", function(done) {
      ms.sync.should.exist;
      ms.makeSync.should.exist;
      ms.makeObjSync.should.exist;
      ms.makeFuncSync.should.exist;
      return done();
    });
    return it("starting with uppercase", function(done) {
      ms.Sync.should.exist;
      ms.MakeSync.should.exist;
      ms.MakeObjSync.should.exist;
      ms.MakeFuncSync.should.exist;
      return done();
    });
  });

}).call(this);