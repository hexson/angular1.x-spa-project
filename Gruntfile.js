var isDev = (function(){
  return process.env.NODE_ENV.trim() === 'development';
})();

var isProd = (function(){
  return process.env.NODE_ENV.trim() === 'production';
})();

module.exports = function (grunt) {
  var watchDelayMs = 200;
  var copy = {
    main: {
      files: [
        {
          expand: true,
          cwd: 'src',
          src: '**/*.{html,htm}',
          dest: 'dist'
        }
      ]
    },
    lib: {
      files: [
        {
          expand: true,
          cwd: 'node_modules/angular',
          src: 'angular.min.js',
          dest: 'dist/js/angular'
        },
        {
          expand: true,
          cwd: 'node_modules/angular-toastr/dist',
          src: '*.{js,css}',
          dest: 'dist/js/angular-toastr'
        },
        {
          expand: true,
          cwd: 'node_modules/angular-ui-router/release',
          src: 'angular-ui-router.min.js',
          dest: 'dist/js/angular-ui-router'
        },
        {
          expand: true,
          cwd: 'node_modules/ng-dialog/js',
          src: 'ngDialog.min.js',
          dest: 'dist/js/ng-dialog'
        },
        {
          expand: true,
          cwd: 'node_modules/ng-dialog/css',
          src: '**/*.css',
          dest: 'dist/js/ng-dialog'
        },
        {
          expand: true,
          cwd: 'node_modules/ng-file-upload/dist',
          src: '*.*',
          dest: 'dist/js/ng-file-upload'
        },
        {
          expand: true,
          cwd: 'node_modules/ngstorage',
          src: 'ngStorage.min.js',
          dest: 'dist/js/ngstorage'
        },
        {
          expand: true,
          cwd: 'node_modules/oclazyload/dist',
          src: 'ocLazyLoad.min.js',
          dest: 'dist/js/oclazyload'
        }
      ]
    }
  };
  if (isDev) {
    copy.controller = {
      files: [
        {
          expand: true,
          cwd: 'src',
          src: ['**/*.js', '!*.js'],
          dest: 'dist'
        }
      ]
    };
  }
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
        exportAll: true,
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - <%= pkg.author %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */\n',
      },
      comparejs: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.js', '!*.js'],
            dest: 'dist',
            ext: '.js'
          },
          // uglify plan A
          // {
          //   'dist/main.js': ['<%= concat.dist.dest %>']
          // }
        ]
      },
      // uglify plan B
      mainjs: {
        files: {
          'dist/main.js': ['<%= concat.dist.dest %>']
        }
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
    copy: copy,
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'dist',
          open: {
            target: 'http://localhost:8080',
            appName: 'open',
            callback: function () {}
          }
        }
      }
    },
    watch: {
      /* isDev === true => disable jshint */
      // jshint: {
      //   files: 'src/**/*.js',
      //   tasks: ['jshint:build'],
      //   options: {
      //     debounceDelay: watchDelayMs
      //   }
      // },
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
      /* isDev === true => disable uglify */
      // uglify plan A
      // uglify: {
      //   files: 'src/**/*.js',
      //   tasks: ['uglify:comparejs'],
      //   options: {
      //     debounceDelay: watchDelayMs
      //   }
      // },
      // uglify plan B
      // uglify1: {
      //   files: ['src/**/*.js', '!src/*.js'],
      //   tasks: ['uglify:comparejs'],
      //   options: {
      //     debounceDelay: watchDelayMs
      //   }
      // },
      // uglify2: {
      //   files: 'src/*.js',
      //   tasks: ['uglify:mainjs'],
      //   options: {
      //     debounceDelay: watchDelayMs
      //   }
      // },
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
  grunt.log.writeln(grunt.initConfig.copy);
  var Task = ['clean', 'copy', 'concat', 'imagemin', 'less', 'cssmin'];
  if (isDev) {
    Task.push('watch');
  }
  if (isProd) {
    Task.splice(1, 0, 'jshint');
    Task.splice(4, 0, 'uglify');
  }
  grunt.registerTask('default', Task);
}