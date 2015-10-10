module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      app: {
        // cwd: '',
        src: ['*.html', 'vendor/**/*', 'templates/**/*', 'js/**/*', 'css/**/*.css'],
        expand: true,
        dest: 'dist/'
      }
    },
    concat: {
      dist: {
        src: [
          'js/*.js',
        ],
        dest: 'dist/js/production.js',
      }
    },
    uglify: {
      build: {
        src: ['js/*.js'],
        dest: 'dist/js/'
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/images/'
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['css/*.scss, js/*.js', 'templates/*.html'],
        tasks: ['copy', 'sass'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy', 'sass', 'watch']);
  grunt.registerTask('production', ['copy', 'sass', 'imagemin']);

};
