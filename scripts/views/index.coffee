define (require) ->
    'use strict'

    View     = require 'lib/views/view'
    template = require 'text!templates/index.hbs'

    class Index extends View

        template: template

        container: '#container'
