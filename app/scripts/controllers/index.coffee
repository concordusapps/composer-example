#! Central application class for the project.
#!

define (require) ->
    'use strict'

    Chaplin = require 'chaplin'
    View    = require 'views/index'

    #! ..
    class Index extends Chaplin.Controller
        #! ..
        show: ->
            @view = new View {@model}
