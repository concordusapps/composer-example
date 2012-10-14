var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  'use strict';

  var Application, Chaplin, routes;
  Chaplin = require('chaplin');
  routes = require('config/routes');
  return Application = (function(_super) {

    __extends(Application, _super);

    function Application() {
      return Application.__super__.constructor.apply(this, arguments);
    }

    Application.prototype.title = 'chaplin :: composer-example';

    Application.prototype.initialize = function() {
      this.initDispatcher({
        controllerSuffix: ''
      });
      this.initLayout();
      this.initComposer();
      this.initMediator();
      this.initRouter(routes, {
        pushState: false
      });
      return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
    };

    Application.prototype.initMediator = function() {
      return Chaplin.mediator.seal();
    };

    return Application;

  })(Chaplin.Application);
});
