#! Simple footer controller
#!

define (require) ->
    'use strict'

    Chaplin = require 'chaplin'

    View = require 'lib/views/view'

    template = require 'text!templates/footer.hbs'

    class Footer extends Chaplin.Controller

        initialize: (options) ->
            super
            @view = new View {region: options.region, template}
