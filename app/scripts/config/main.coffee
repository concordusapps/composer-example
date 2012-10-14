#! Defines its depenencies and instantiates the application.
#!

require.config
    baseUrl: '/scripts/'

    paths:
        # Collection of (extremely) useful utilities.
        # http://lodash.com/docs
        underscore: 'vendor/lodash'

        # Eases DOM manipulation.
        jquery: 'vendor/jquery'

        # Provides the JSON object for manipulation of JSON strings if not
        # already defined.
        json2: 'vendor/json3'

        # Core framework powering the single-page application
        backbone: 'vendor/backbone'
        chaplin: 'vendor/chaplin'

        # Template compilation: handlebars + require-text
        handlebars: 'vendor/handlebars'
        text: 'vendor/require-text'

        # Templates
        templates: '/templates'

        # Moment js, for date/time formatting
        moment: 'vendor/moment'

    shim:
        backbone:
            exports: "Backbone"
            deps: [
                "jquery"
                "underscore"
                "json2"
            ]

        handlebars:
            exports: 'Handlebars'

require ['app'], (Application) ->
    app = new Application()
    app.initialize()
