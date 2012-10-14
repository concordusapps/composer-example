#! Central application class for the project.
#!

define (require) ->
    'use strict'

    Chaplin = require 'chaplin'
    routes  = require 'config/routes'

    #! The main object; represents the entirety of the app.
    class Application extends Chaplin.Application

        #! Right-most document title of the app.
        title: 'chaplin :: composer-example'

        #! Initialize the application; set up the global context.
        initialize: ->
            # Initialize core
            @initDispatcher controllerSuffix: ''
            @initLayout()
            @initComposer()
            @initMediator()

            # Register all routes and start routing
            @initRouter routes, pushState: false

            # Freeze the object instance; prevent further changes
            Object.freeze? @

        initMediator: ->
            # TODO: Chaplin.mediator.session = new Session()
            Chaplin.mediator.seal()
