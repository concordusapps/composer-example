var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  'use strict';

  var Chaplin, Footer, View, template;
  Chaplin = require('chaplin');
  View = require('lib/views/view');
  template = require('text!templates/footer.hbs');
  return Footer = (function(_super) {

    __extends(Footer, _super);

    function Footer() {
      return Footer.__super__.constructor.apply(this, arguments);
    }

    Footer.prototype.initialize = function(options) {
      Footer.__super__.initialize.apply(this, arguments);
      return this.view = new View({
        region: options.region,
        template: template
      });
    };

    return Footer;

  })(Chaplin.Controller);
});
