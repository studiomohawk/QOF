module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    },
    qunit: {
      all: ['test/app/runner.html']
    },
    watch: {
      test: {
        files: ['app/**/*.js',' test/**/*.*'],
        tasks: ['qunit']
      }
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  // Default task
  grunt.registerTask('default', ['connect', 'watch', 'qunit']);
  grunt.registerTask('test', ['qunit']);
};
