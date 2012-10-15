var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  'use strict';

  var Footer, Header, Site, View, template;
  View = require('lib/views/view');
  template = require('text!templates/inner.hbs');
  Header = require('controllers/header');
  Footer = require('controllers/footer');
  return Site = (function(_super) {

    __extends(Site, _super);

    function Site() {
      return Site.__super__.constructor.apply(this, arguments);
    }

    Site.prototype.container = '#container';

    Site.prototype.template = template;

    Site.prototype.regions = function(region) {
      return region('content', '#content');
    };

    return Site;

  })(View);
});
