module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            default: {
                options: {},
                files: {
                    "build/css/styles.css": "src/lesscss/styles.less"
                }
            }
        },
        copy: {
            default: {
                files: [
                    {expand: true, cwd: 'src/img/', src: ['*'], dest: 'build/img/'},
                    {expand: true, cwd: 'src/img/favicon', src: ['*'], dest: 'build/img/favicon'}
                ]
            }
        },
        cssmin: {
            default: {
                expand: true,
                cwd: 'build/css/',
                dest: 'build/css/',
                src: ['*.css'],
                ext: '.css'
            }
        },
        uglify: {
            default: {
                files: [
                    {'build/js/bootstrap.min.js': 'node_modules/bootstrap/dist/js/bootstrap.js'},
                    {'build/js/jquery.min.js': 'node_modules/jquery/dist/jquery.js'},
                    {'build/js/angular.min.js': 'node_modules/angular/lib/angular.js'}
                ]
            }
        },
        clean: ['build/']
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean', 'copy', 'less', 'cssmin', 'uglify']);
};
