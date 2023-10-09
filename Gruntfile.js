module.exports = function(grunt) {
    grunt.initConfig({
    less: {
    development: {
        options: {
            paths: ['css'],
            compress: false //compilar sem compressão
        },
        files: {
            'css/styles.css': 'less/styles.less' //arquivo de entrada e saída
        }
        },
    production: {
        options: {
            paths: ['css'],
            compress: true //compilar com compressão
        },
        files: {
            'css/styles.min.css': 'less/styles.less' //arquivo de entrada e saída
        }
        }
    },
    uglify: {
        my_target: {
        files: {
            'js/script.min.js': ['js/script.js'] //arquivo de entrada e saída
        }
        }
    }
    });
    // Carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Tarefas padrão
    grunt.registerTask('default', ['less:development', 'uglify']);
    grunt.registerTask('production', ['less:production', 'uglify']);
};
