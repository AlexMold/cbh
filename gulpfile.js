'use strict';


var gulp = require('gulp'),
	sass = require('gulp-sass'),
    notify = require("gulp-notify"),
    bower = require('gulp-bower'),
    autoprefix = require('gulp-autoprefixer'),
    imageop = require('gulp-image-optimization'),
    concat = require('gulp-concat');

var config = {
    sassPath: './resources/sass',
    bowerDir: './bower_components'
}
var plugins ={
    path: ['./bower_components/jquery/dist/jquery.min.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min.js',
    './bower_components/chartist-js/dist/chartist.min.js',
    './bower_components/chosen/chosen.jquery.min.js',
    './bower_components/multiple-select/multiple-select.js',
    './bower_components/jQuery-Mask-Plugin/dist/jquery.mask.min.js',
    './bower_components/pnotify/dist/pnotify.js']
}

gulp.task('scripts', function() {
  return gulp.src(plugins.path)
    .pipe(concat('plugin.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('images', function(cb) {
    gulp.src(['resources/**/*.png','resources/**/*.jpg','resources/**/*.gif','resources/**/*.jpeg'])
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public')).on('end', cb).on('error', cb);
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('css', function() {
    return gulp.src(config.sassPath + '/style.scss')
        // .pipe(autoprefix())
        .pipe(sass()
            .on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })))
        .pipe(gulp.dest('./public/css'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('default', ['bower', 'icons', 'css', 'images']);
