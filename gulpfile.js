var gulp = require('gulp'),
	sass = require('gulp-sass');
    notify = require("gulp-notify"),
    bower = require('gulp-bower'),
    pixrem = require('gulp-pixrem');

var config = {
    sassPath: './resources/sass',
    bowerDir: './bower_components'
}

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('css', function() {
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(sass()
            .on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('pxrem', function() {
    return gulp.src('public/css/style.css')
        .pipe(pixrem({ rootValue: '10px' }))
        .pipe(gulp.dest('./public/css/main'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('default', ['bower', 'icons', 'css']);
