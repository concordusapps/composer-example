/** Grunt configuration for this project.
 */

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        // project configuration
        // ---------------------

        // <https://github.com/yeoman/yeoman/blob/master/cli/tasks/bower.js>
        bower: {
            // local installation directory for bower
            dir: 'app/scripts/vendor'
        },

        // <https://github.com/gruntjs/grunt-contrib-coffee/blob/master/README.md>
        coffee: {
            compile: {
                files: {
                    'temp/scripts/*.js': 'app/scripts/**/*.coffee'
                },
                options: {
                    basePath: 'app/scripts',
                    bare: true
                }
            }
        },

        // <http://compass-style.org/help/tutorials/configuration-reference/>
        compass: {
            dist: {
                options: {
                    sass_dir: 'app/styles',
                    images_dir: 'app/images',
                    css_dir: 'temp/styles',
                    javascripts_dir: 'temp/scripts',
                    force: true
                }
            }
        },

        manifest:{
            dest: ''
        },

        mocha: {
            all: ['test/**/*.html']
        },

        watch: {
            coffee: {
                files: 'app/scripts/**/*',
                tasks: 'coffee reload'
            },
            compass: {
                files: [
                    'app/styles/**/*.{scss,sass}'
                ],
                tasks: 'compass reload'
            },
            reload: {
                files: [
                    'app/*.html',
                    'app/templates/**/*.hbs',
                    'app/styles/**/*.css',
                    'app/scripts/**/*.js',
                    'app/images/**/*'
                ],
                tasks: 'reload'
            }
        },

        // <https://github.com/cowboy/grunt/blob/master/docs/task_lint.md>
        lint: {
            files: [
                'gruntfile.js',
                'app/scripts/**/*.js',
                'spec/**/*.js'
            ]
        },

        // <https://github.com/cowboy/grunt/blob/master/docs/task_lint.md>
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                jQuery: true
            }
        },

        // build configuration
        // -------------------

        // the staging directory used during the process
        staging: 'temp',

        // final build output
        output: 'dist',

        // directories to make in the staging directory
        mkdirs: {
            staging: 'app/'
        },

        // concat css/**/*.css files, inline @import,
        // output a single minified css
        css: {
            'styles/main.css': ['styles/**/*.css']
        },

        // renames files to prepend a vesioned hash of their contents
        rev: {
            // js: 'scripts/**/*.js',
            css: 'styles/**/*.css',
            img: '../images/**'
        },

        'usemin-handler': {
            html: 'index.html'
        },

        // update references in HTML/CSS to revved files
        usemin: {
            html: ['**/*.html'],
            css: ['**/*.css']
        },

        // HTML minification
        html: {
            files: ['**/*.html']
        },

        // Optimizes JPGs and PNGs (with jpegtran & optipng)
        img: {
            dist: '../images/**'
        },

        // <http://requirejs.org/docs/optimization.html>
        rjs: {
            optimize: 'none',
            baseUrl: './scripts',
            name: 'main',
            wrap: false
        },

        // while Yeoman handles concat/min when using
        // usemin blocks, you can still use them manually
        concat: {
            dist: ''
        },

        min: {
            dist: ''
        }
    });

    // alias the `test` task to run the `mocha` task instead
    grunt.registerTask('test', 'mocha');
};
