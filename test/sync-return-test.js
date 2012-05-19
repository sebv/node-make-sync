// Generated by CoffeeScript 1.3.3
(function() {
  var MakeSync, Sync, should, _ref;

  should = require('should');

  _ref = require('../lib/make-sync'), Sync = _ref.Sync, MakeSync = _ref.MakeSync;

  describe("sync", function() {
    describe("default", function() {
      return it("should throw Shit", function(done) {
        var f, syncF;
        f = function(done) {
          return done(new Error("Shit happens!"));
        };
        syncF = MakeSync(f);
        return Sync(function() {
          (function() {
            return syncF();
          }).should["throw"](/Shit/);
          return done();
        });
      });
    });
    describe("single result with err", function() {
      return it("should work", function(done) {
        var f, syncF;
        f = function(done) {
          return done(null, 10);
        };
        syncF = MakeSync(f, {
          'sync-return': 'err, res'
        });
        return Sync(function() {
          var res;
          res = syncF();
          res.should.equal(10);
          return done();
        });
      });
    });
    describe("multiple resultS with err", function() {
      return it("should work", function(done) {
        var f, syncF;
        f = function(done) {
          return done(null, 10, 20);
        };
        syncF = MakeSync(f, {
          'sync-return': 'err,res...'
        });
        return Sync(function() {
          var res;
          res = syncF();
          res.should.eql([10, 20]);
          return done();
        });
      });
    });
    describe("throw error", function() {
      return it("should throw Shit", function(done) {
        var f, syncF;
        f = function(done) {
          return done(new Error("Shit happens!"));
        };
        syncF = MakeSync(f, {
          'sync-return': 'err, res'
        });
        return Sync(function() {
          (function() {
            return syncF();
          }).should["throw"](/Shit/);
          return done();
        });
      });
    });
    describe("single result without err", function() {
      return it("should work", function(done) {
        var f, syncF;
        f = function(done) {
          return done(10);
        };
        syncF = MakeSync(f, {
          'sync-return': 'res'
        });
        return Sync(function() {
          var res;
          res = syncF();
          res.should.equal(10);
          return done();
        });
      });
    });
    describe("multiple resultS without err", function() {
      return it("should work", function(done) {
        var f, syncF;
        f = function(done) {
          return done(10, 20);
        };
        syncF = MakeSync(f, {
          'sync-return': 'res...'
        });
        return Sync(function() {
          var res;
          res = syncF();
          res.should.eql([10, 20]);
          return done();
        });
      });
    });
    describe("with function", function() {
      return it("should work", function(done) {
        var f, syncF;
        f = function(done) {
          return done(10, 20);
        };
        syncF = MakeSync(f, {
          'sync-return': function(res1, res2) {
            return res1 + res2;
          }
        });
        return Sync(function() {
          var res;
          res = syncF();
          res.should.equal(30);
          return done();
        });
      });
    });
    return describe("object", function() {
      return it("should work", function(done) {
        var obj;
        obj = {
          f: function(done) {
            return done(null, 10);
          },
          g: function(done) {
            return done(null, 10, 20);
          },
          h: function(done) {
            return done(50);
          }
        };
        MakeSync(obj, {
          'sync-return': {
            '*': 'err,res',
            'g': function(err, res1, res2) {
              return res1 + res2;
            },
            'h': 'res'
          }
        });
        return Sync(function() {
          obj.f().should.equal(10);
          obj.g().should.equal(30);
          obj.h().should.equal(50);
          return done();
        });
      });
    });
  });

}).call(this);
