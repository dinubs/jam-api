const gulp = require('gulp');
const less = require('gulp-less');
const min  = require('gulp-minify-css');

gulp.task('less', function() {
  return gulp.src('./public/less/application.less')
             .pipe(less())
             .pipe(min())
             .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
  return gulp.watch('./public/less/**/*.less', ['less']);
});

gulp.task('default', ['less']);