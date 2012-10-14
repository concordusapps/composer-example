#! Alternate application class for the project.
#!

define (require) ->
    'use strict'

    Chaplin = require 'chaplin'

    Site = require 'views/site'
    View = require 'lib/views/view'

    template = require 'text!templates/site/other.hbs'

    #! ..
    class Index extends Chaplin.Controller
        #! ..
        show: ->
            @publishEvent '!composer:compose', Site
            @view = new View
                template: template
                region: 'body'
                model: @model
