var gulp = require('gulp'),   
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

gulp.task('default', ['webserver']);