var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  'use strict';

  var Chaplin, Header, View, template;
  Chaplin = require('chaplin');
  View = require('lib/views/view');
  template = require('text!templates/header.hbs');
  return Header = (function(_super) {

    __extends(Header, _super);

    function Header() {
      return Header.__super__.constructor.apply(this, arguments);
    }

    Header.prototype.initialize = function() {
      Header.__super__.initialize.apply(this, arguments);
      return this.view = new View({
        region: 'header',
        template: template
      });
    };

    return Header;

  })(Chaplin.Controller);
});
