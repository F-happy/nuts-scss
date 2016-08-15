/**
 * Created by fuhuixiang on 16-8-15.
 */
"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('test', ()=> {
    gulp.src('./test/*.scss')
        .pipe(sass({
            includePaths: require('./index').includePaths,
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./test/'));
});

gulp.task('test:watch', ()=> {
    gulp.watch('./test/*.scss', ['test']);
});
