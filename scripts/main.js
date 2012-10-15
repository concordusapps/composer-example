
require.config({
  baseUrl: '/composer-example/scripts/',
  paths: {
    underscore: 'vendor/lodash',
    jquery: 'vendor/jquery',
    json2: 'vendor/json3',
    backbone: 'vendor/backbone',
    chaplin: 'vendor/chaplin',
    handlebars: 'vendor/handlebars',
    text: 'vendor/require-text',
    templates: '../templates',
    moment: 'vendor/moment'
  },
  shim: {
    backbone: {
      exports: "Backbone",
      deps: ["jquery", "underscore", "json2"]
    },
    handlebars: {
      exports: 'Handlebars'
    }
  }
});

require(['app'], function(Application) {
  var app;
  app = new Application();
  return app.initialize();
});
