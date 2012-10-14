#! Extensions to `Chaplin.View` not merged into Chaplin for various
#! reasons.
#!

define (require) ->
    'use strict'

    _          = require 'underscore'
    Chaplin    = require 'chaplin'
    Handlebars = require 'handlebars'
    moment     = require 'moment'

    #! Extends the chaplin view, well; we'll leave it a that.
    class View extends Chaplin.View

        #! All views auto render themselves unless declared else-wise
        autoRender: true

        #! Just returns the template property which is a function that
        #! creates the HTML template given a context.
        getTemplateFunction: ->
            if typeof @template is 'string'
                @template = Handlebars.compile @template
            else
                @template

        #! Allows @template to be passed in to initialize
        initialize: (options = {}) ->
            @template = options.template if options.template?
            super

        #! As none of the views in this demonstration are linked to models;
        #! override and return some debug information
        getTemplateData: ->
            cid: @cid
            timestamp: moment().format('HH:MM:ss.SSS')
            container: @container
