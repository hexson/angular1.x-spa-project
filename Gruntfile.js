// var angular = require('./node_modules/angular/');
// import angular from './node_modules/angular';
module.exports = function (grunt) {
  var watchDelayMs = 100;
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      folder: ['dist']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      build: ['src/**/*.js']
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/app.config.js', 'src/app.js', 'src/app.filter.js', 'src/app.services.js'],
        dest: 'dist/main.js'
      }
    },
    uglify: {
      options: {
        stripBanners: true,
        banner: '// <%= pkg.name %> - <%= pkg.author %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %>\n',
      },
      comparejs: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: '*/*.js',
            dest: 'dist',
            ext: '.js'
          },
          {
            'dist/main.js': ['<%= concat.dist.dest %>']
          }
        ]
      }
    },
    less: {
      transform: {
        files: [
          {
            expand: true,
            cwd: 'src/less',
            src: '*.less',
            dest: 'dist/css',
            ext: '.css'
          }
        ]
      }
    },
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: 'src/img',
            src: '*.{jpg,png,gif}',
            dest: 'dist/img'
          }
        ]
      }
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: 'dist/css',
            src: '*.css',
            dest: 'dist/css'
          }
        ]
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: '**/*.{html,htm}',
            dest: 'dist'
          },
          {
            expand: true,
            cwd: 'node_modules/angular',
            src: 'angular.min.js',
            dest: 'dist/js/angular'
          }
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'dist'
        }
      }
    },
    watch: {
      jshint: {
        files: 'src/**/*.js',
        tasks: ['jshint:build'],
        options: {
          debounceDelay: watchDelayMs
        }
      },
      copy: {
        files: 'src/**/*.{html,htm}',
        tasks: ['copy:main'],
        options: {
          debounceDelay: watchDelayMs
        }
      },
      concat: {
        files: 'src/*.js',
        tasks: ['concat:dist'],
        options: {
          debounceDelay: watchDelayMs
        }
      },
      uglify: {
        files: ['src/*/*.js', 'dist/main.js'],
        tasks: ['uglify:comparejs'],
        options: {
          debounceDelay: watchDelayMs
        }
      },
      imagemin: {
        files: 'src/img/*.{jpg,png,gif}',
        tasks: ['imagemin:dynamic'],
        options: {
          debounceDelay: watchDelayMs
        }
      },
      less: {
        files: 'src/less/*.less',
        tasks: ['less:transform'],
        options: {
          debounceDelay: watchDelayMs
        }
      },
      cssmin: {
        files: 'dist/css/*.css',
        tasks: ['cssmin:target'],
        options: {
          debounceDelay: watchDelayMs
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['clean', 'jshint', 'copy', 'concat', 'uglify', 'imagemin', 'less', 'cssmin', 'watch']);
}