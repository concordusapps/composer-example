# This is our main site composition

define (require) ->
    'use strict'

    View = require 'lib/views/view'

    template = require 'text!templates/site.hbs'

    Header = require 'controllers/header'

    Footer = require 'controllers/footer'

    class Site extends View

        container: '#container'

        template: template

        regions: (region) ->
            region 'header', 'header'
            region 'footer', 'footer'
            region 'body',   '#body'

        afterRender: ->
            super

            # We're defining both a header and a footer region.  However, these
            # regions ought to be populated by this composition because they
            # will not change (much) throughout the application's operation

            # Should we be able to override these in a controller?
            @header = new Header {region: 'header'}
            @footer = new Footer {region: 'footer'}

        # TODO: dispose these automagically?
        dispose: ->
            return if @disposed
            @header.dispose()
            @footer.dispose()
            super
