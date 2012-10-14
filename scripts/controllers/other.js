var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  'use strict';

  var Chaplin, Index, Model, Site, View, template;
  Chaplin = require('chaplin');
  Site = require('views/site');
  View = require('views/index');
  Model = require('models/data');
  template = require('text!templates/other.hbs');
  return Index = (function(_super) {

    __extends(Index, _super);

    function Index() {
      return Index.__super__.constructor.apply(this, arguments);
    }

    Index.prototype.show = function() {
      this.publishEvent('!composer:compose', Site);
      this.model = new Model;
      return this.view = new View({
        template: template,
        region: 'body',
        model: this.model
      });
    };

    return Index;

  })(Chaplin.Controller);
});
