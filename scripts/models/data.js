var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  'use strict';

  var Chaplin, Data, _;
  Chaplin = require('chaplin');
  _ = require('underscore');
  return Data = (function(_super) {

    __extends(Data, _super);

    function Data() {
      return Data.__super__.constructor.apply(this, arguments);
    }

    Data.prototype.defaults = function() {
      return {
        name: _.uniqueId('Name_'),
        value: _.random(1000)
      };
    };

    return Data;

  })(Chaplin.Model);
});
