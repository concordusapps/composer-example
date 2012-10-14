var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  'use strict';

  var Chaplin, Handlebars, View, moment, _;
  _ = require('underscore');
  Chaplin = require('chaplin');
  Handlebars = require('handlebars');
  moment = require('moment');
  return View = (function(_super) {

    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.autoRender = true;

    View.prototype.getTemplateFunction = function() {
      if (typeof this.template === 'string') {
        return this.template = Handlebars.compile(this.template);
      } else {
        return this.template;
      }
    };

    View.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      if (options.template != null) {
        this.template = options.template;
      }
      return View.__super__.initialize.apply(this, arguments);
    };

    View.prototype.getTemplateData = function() {
      return {
        cid: this.cid,
        timestamp: moment().format('HH:MM:ss.SSS'),
        container: this.container
      };
    };

    return View;

  })(Chaplin.View);
});
