'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    simplemocha: {
      src: ['test/api/**/*.js']
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: ['server.js', 'test/api/*.js', 'test/app/client/*.js', 'app/js/*.js', 'Gruntfile.js']
    },

    jscs: {
      options: {
        config: '.jscsrc'
      },
      src: ['server.js', 'test/api/*.js', 'test/app/client/*.j    s', 'app/js/*.js', 'Gruntfile.js']
    },

    clean: {
      dev: {
        src: 'build/'
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/app/client/**/*.js'],
        dest: 'test/app/test_bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'build/main.css': 'app/sass/main.sass'
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.config.js'
      },
      continuous: {
        configFile: 'karma.config.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }
  });
  grunt.registerTask('test', ['simplemocha', 'jshint', 'jscs']);
  grunt.registerTask('test:client', ['browserify:test', 'karma:unit']);
  grunt.registerTask('default', ['test']);
  grunt.registerTask('build:dev', ['clean:dev', 'copy:dev', 'browserify:dev', 'sass']);
};
