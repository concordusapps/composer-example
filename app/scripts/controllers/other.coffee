#! Alternate application class for the project.
#!

define (require) ->
    'use strict'

    Chaplin = require 'chaplin'

    Site = require 'views/site'
    View = require 'views/index'

    Model = require 'models/data'

    template = require 'text!templates/other.hbs'

    #! ..
    class Index extends Chaplin.Controller
        #! ..
        show: ->
            # make a composition
            # @composition = new Composition
            @publishEvent '!composer:compose', Site

            # Make a new model.
            @model = new Model

            # Make a new view and assign it to a region
            # Regional assignments are defined inside the view's constructor
            # rather than by assigning the view to the composition somehow
            @view = new View
                template: template
                region: 'body'
                model: @model
