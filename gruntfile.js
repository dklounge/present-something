module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['Chrome', 'Firefox']
      }
    },
    clean: {
      css: ["app/css/*.css"],
    },
    less: {
      options: {
        paths: ['app/less']
      },
      src: {
        expand: true,
        cwd:    "app/less",
        src:    "*.less",
        dest:   "app/css",
        ext:    ".css"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('run', ['clean', 'less']);
};
