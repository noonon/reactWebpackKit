/**
 * Created by noonon on 6/12/16.
 */
var gulp = require('gulp');
var restEmulator = require('gulp-rest-emulator');

gulp.task('run', function () {
    // Options not require
    var options = {
        port: 8080,
        root: ['./public/'],
        rewriteNotFound: false,
        rewriteTemplate: 'index.html',
        corsEnable: false, // Set true to enable CORS
        corsOptions: {}, // CORS options, default all origins
        headers: {} // Set headers for all response, default blank
    };
    return gulp.src('./mocks/**/*.js')
        .pipe(restEmulator(options));
});

gulp.task('default', ['run'], function () {
    gulp.watch('./mocks/**/*.js', ['run']);
});