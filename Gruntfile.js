module.exports = function (grunt) {
  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // paths
    app: {
      src: 'app/',
      assets: '<%= app.src %>assets/',
      css: '<%= app.assets %>css/',
      js: '<%= app.assets %>js/'
    },
    src: {
      src: 'src/',
      scss: '<%= src.src %>scss/',
      js: '<%= src.src %>js/',
      concat: '<%= src.js %>concat/'
    },

    // watch
    watch: {
      scripts: {
        files: [
          '<%= src.scss %>**/*.scss',
          '<%= src.js %>**/*.js'
        ],
        tasks: ['dafault']
      }
    },

    // concat
    concat: {
      dist: {
        src: [
          '<%= app.js %>'
        ],
        dest: '<%= src.concat %>app.js'
      }
    },

    // uglify
    uglify: {
      my_target: {
        files: {
          '<%= app.js %>app.min.js': '<% src.concat %>app.js'
        }
      }
    },

    // sass
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          '<%= app.css %>app.mim.css': '<%= src.scss %>app.scss'
        }
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // register tasks
  grunt.registerTask('default', ['concat', 'uglify', 'sass']);
  grunt.registerTask('concat-files', ['concat']);
  grunt.registerTask('uglify-files', ['uglify']);
  grunt.registerTask('sass-files', ['sass']);

};
