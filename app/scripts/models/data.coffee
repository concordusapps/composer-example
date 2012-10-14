#! This is an extremely unexciting demonstration model
#!

define (require) ->
    'use strict'

    Chaplin = require 'chaplin'

    _       = require 'underscore'

    class Data extends Chaplin.Model

        defaults: ->
            name: _.uniqueId 'Name_'
            value: _.random(1000)
