var gulp = require('gulp'),    
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var config = {
    server: {
        baseDir: "."
    },
    tunnel: true,
    host: 'localhost',
    port: 9000
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('compress', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(reload({stream: true}));
});

gulp.task('minify', function() {
    gulp.src('src/css/*.css')
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css/'))
        .pipe(reload({stream: true}));
});

gulp.task('build', function() {
    gulp.run('compress');
    gulp.run('minify');

});

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', function() {
        gulp.run('compress');
    });
    gulp.watch('src/css/*.css', function() {
        gulp.run('minify');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);