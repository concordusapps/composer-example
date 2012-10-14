#! Alternate application class for the project.
#!

define (require) ->
    'use strict'

    Chaplin = require 'chaplin'

    Site = require 'views/site'
    Inner = require 'views/inner'
    View = require 'lib/views/view'

    template = require 'text!templates/inner/other.hbs'

    #! ..
    class Index extends Chaplin.Controller
        #! ..
        show: ->
            @publishEvent '!composer:compose', Site
            @publishEvent '!composer:compose', Inner, region: 'body'
            @view = new View
                template: template
                region: 'content'
                model: @model
