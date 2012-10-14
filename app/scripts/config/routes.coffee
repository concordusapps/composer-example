#! Defines the routes for the application.
#!

define ->
    'use strict'

    (match) ->
        match '',                 'index#show'
        match 'site',             'site/index#show'
        match 'site/other',       'site/other#show'
        match 'site/inner',       'inner/index#show'
        match 'site/inner/other', 'inner/other#show'
