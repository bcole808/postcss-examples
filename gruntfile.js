
module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compact',
                includePaths: ['styles']
            },
            default: {
                files: {
                    'style/main.min.css' : 'style/main.scss'
                }
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 4 versions']
                    }),
                    require('cssnano')()
                ]
            },
            default: {
                src: ['style/*.css']
            }
        },


    });


    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');


    grunt.registerTask('default', [

        'sass',
        'postcss'

    ]);

};