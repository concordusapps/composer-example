#! Simple header controller
#!

define (require) ->
    'use strict'

    Chaplin     = require 'chaplin'
    View        = require 'lib/views/view'

    template    = require 'text!templates/header.hbs'

    class Header extends Chaplin.Controller

        initialize: ->
            super
            @view = new View {region: 'header', template}
