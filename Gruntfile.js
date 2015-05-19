module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'js/*.js', // All JS in the libs folder
          'js/global.js' // This specific file
        ],
        dest: 'js/build/production.js',
      }
    },
    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.scss'],
          dest: 'css/build/',
          ext: '.css'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
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

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);
  grunt.registerTask('production', ['concat', 'uglify', 'sass', 'imagemin']);

};
