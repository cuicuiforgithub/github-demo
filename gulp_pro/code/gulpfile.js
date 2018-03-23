

'use strict'
var gulp =require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
gulp.task('copy',function(){
    //复制文件
    gulp.src('src/index.html').pipe(gulp.dest('dist/'));
});

gulp.task('dist',function(){
    //复制文件
    gulp.src('src/index.html').pipe(gulp.dest('dist/'));
    gulp.watch('src/index.html',['copy']);
    gulp.watch('src/index.html',['style']);
});

gulp.task('style',function(){
    //复制文件
    gulp.src('src/styles/*.less')
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css/'));
});

var browserSync=require('browser-sync').create();
gulp.task('serve',function () {
    browserSync.init({
        server:{
            baseDir:'./'
        }
    } )
})