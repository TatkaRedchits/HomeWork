module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      }
    },

    uglify: {
      dist: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
      }
    },

    cssmin: {
      dist: {
        files: {
         'css/dist/style.min.css': ['css/src/*.css']
       }
     }
   },

   serve: {
        options: {
            port: 9000,
            base: './index.html',
            livereload: true
        }
    },     

   watch: {
    scripts: {
      files: ['js/src/*.js'],
      tasks: ['concat', 'uglify'],
      options: {
        spawn: false,
        livereload: true
      }
    },
    css: {
      files: ['css/src/*.css'],
      tasks: ['cssmin'],
      options: {
        spawn: false,
        livereload: true
      }
    }
  }

});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'serve', 'watch']);

};

